import { responseCodes } from "../static/constants";
import { ErrorRes } from "../types/classes";
import { isNullOrUndefined, isObject } from "./helpers";

let finalErrRes: ErrorRes = {
  responseCode: responseCodes.FAILED,
  status: "",
  data: "",
  message: "",
  hasError: true
}
export const handleMyErrors = (err: any) => {
  try {
    const errRes = err.response?.data;
    if (
      !isNullOrUndefined(errRes) &&
      errRes.error_description?.toString().includes("change default/initial")
    ) {
      finalErrRes = Object.assign({}, finalErrRes,
        { responseCode: responseCodes.BAD_REQUEST });
    } else if (!isNullOrUndefined(err?.response) && isObject(err?.response)) {
      let errResData = err.response.data || {};
      let errResDataString = "";
      let responseCode ="";
      for (const [keys, values] of Object.entries(errResData)) {
        errResDataString += keys === "message" ? values : "";
        responseCode+=keys === "responseCode" ? values: "";
      }
      finalErrRes = Object.assign({}, finalErrRes,
        {
          responseCode: responseCode ?? responseCodes.BAD_REQUEST, message:
            isNullOrUndefined(errResDataString) ||
              errResDataString?.toLowerCase().includes("bad request")
              ? "Bad request"
              : errResDataString
        });
    }

  } catch (err) {
    console.log("ERROR OCCURRED WHILE PARSING ERRORS=>", err);
  }
  return finalErrRes;
};
