import httpService from "./httpService";
import { handleMyErrors } from "./errorHandlerService";
import { LoginRequest } from "../types/classes";
import { responseCodes } from "../static/constants";
import { endpoints } from "../utils/apiCallEndpoints";

export const callUserLoginApi = async (_data: LoginRequest) => {
  let reqResponse = null;
  try {
    const options = {
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
    };
    const url = endpoints.loginEndpoint;
    const { status, data } = await httpService.post(url, _data, options);
    if (status === 200 && data) {
      if (data.responseCode === responseCodes.SUCCESSFUL) {
        const jwtToken = data.data?.access_token;
        httpService.setJwt(jwtToken);
        reqResponse = data.data?.user;
      } else {
        reqResponse = {
          responseCode: data.responseCode,
        };
      }
    }
  } catch (err) {
    httpService.setJwt("");
    console.log(
      "ERROR OCCURRED WHILE CONNECTING TO THE API AUTH SERVER:::",
      err
    );
    reqResponse = handleMyErrors(err);
  }
  return reqResponse;
};
