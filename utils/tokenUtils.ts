import moment from "moment";
import httpService from "../services/httpService";
import { endpoints } from "./apiCallEndpoints";
import { handleMyErrors } from "./errorHandlingUtil";
import { getValueFromUserDetail, isEmptyString, isNullOrUndefined } from "./helpers";

let tokenCounterTimeoutId = -1;
export const tokenRefreshTimeout = tokenCounterTimeoutId;
export const parseJwt = (token: any) => {
    try {
        let base64Url = token.split(".")[1];
        let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        let jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(jsonPayload);
    } catch (err) {
        return null;
    }
};

export const tokenRequeryProcessing = (accessToken: string) => {
    let _tDet = parseJwt(accessToken);
    let expiresAt = _tDet?.exp;
    let expiresAt_ms = expiresAt;
    let nowNow = moment.now();
    // let tokenRequeryInterval = (expiresAt * 1000 - nowNow) * 0.8;
    let tokenRequeryInterval = 180000;
    sessionStorage.setItem("nowNow", String(nowNow));
    sessionStorage.setItem("expiresAt", expiresAt_ms);
    sessionStorage.setItem("requeryTime", String(nowNow + tokenRequeryInterval));
    sessionStorage.setItem("tokenRequeryInterval", String(tokenRequeryInterval));

    return { tokenDetails: _tDet, tokenRequeryInterval: tokenRequeryInterval };
};

function getRefreshToken() {
    let tokenVal = sessionStorage.getItem("refreshToken");
    return tokenVal;
}


const getTokenRefreshTime = () => {
    let interval = sessionStorage.getItem("tokenRequeryInterval")
    if (!isNullOrUndefined(interval)) {
        let time = Number(interval)
        return time - (Math.floor(time / 5))
    }
    return 5000
}

export const keepTokenFresh = async () => {
    setTimeout(() => {
        refreshToken()
        keepTokenFresh()
    }, getTokenRefreshTime());
}

export const refreshToken = async () => {
    try {
        let refT = getRefreshToken();
        if (!isNullOrUndefined(refT) || !isEmptyString(refT)) {
            const options = {
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    Authorization: "Basic ".concat(
                        process.env.REACT_APP_BASIC_AUTH ?? ""
                    ),
                },
            };
            const url = endpoints.loginEndpoint;
            const { status, data } = await httpService.post(
                url,
                {},
                options
            );

            if (status === 200 && data) {
                const jwtToken = data.access_token;
                clearTimeouts(tokenRefreshTimeout);
                sessionStorage.setItem("refreshToken", data.refresh_token);
                tokenRequeryProcessing(jwtToken);

                // recursiveCountdownTo(tRes.tokenRequeryInterval, true);
                httpService.setJwt(jwtToken);
                return data;
            }
        }
    } catch (err) {
        httpService.setJwt("");
        return handleMyErrors(err);
    }
};


export const clearTimeouts = (timeOutId = 0) => {
    if (timeOutId > 0) {
        window.clearTimeout(timeOutId);
    } else {
        var noop = function () { },
            firstId = window.setTimeout(noop, 0);
        return function () {
            var lastId = window.setTimeout(noop, 0);
            console.log("Removing", lastId - firstId, "timeout handlers");
            while (firstId !== lastId) window.clearTimeout(++firstId);
        };
    }
};

export const doAuthentication = () => {
    let userLoginStatus = getValueFromUserDetail("isLoggedIn");
    if (userLoginStatus !== null && ["true", true].includes(userLoginStatus)) {
        return true;
    }
    return null;
};

// export const doAuthorization = (url) => {
//     let accessibleMenus = sessionStorage.getItem("accessibleMenus");
//     let authorized = false;
//     if (!isNullOrUndefined(accessibleMenus) && accessibleMenus.length > 0) {
//         let checkerArr = accessibleMenus.filter(
//             (obj) => obj.menuController === url
//         );
//         if (checkerArr && checkerArr.length > 0) {
//             authorized = true;
//         }
//     }
//     return authorized;
// };