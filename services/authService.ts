import { LoginRequest, RegisterRequest } from "../types/classes";
import { endpoints } from "../utils/apiCallEndpoints";
import { handleMyErrors } from "../utils/errorHandlingUtil";
import { isSuccessful } from "../utils/helpers";
import httpService from "./httpService";

export const callRegisterApi = async (_data: RegisterRequest) => {
  try {
    const url = endpoints.registerEndpoint;
    const { data } = await httpService.post(url, _data).catch((err: any) => {
      return handleMyErrors(err);
    });
    return data;

  } catch (err: any) {
    console.log(
      "ERROR OCCURRED WHILE CONNECTING TO THE REGISTER SERVICE:::",
      err
    );
    return handleMyErrors(err);
  }
}
export const callUserLoginApi = async (_data: LoginRequest) => {
  try {

    const url = endpoints.loginEndpoint;
    const { data } = await httpService.post(url, _data).catch((err: any) => {
      const errBody = handleMyErrors(err);
      return { data: errBody }
    });
    if (isSuccessful(data?.responseCode)) {
      const jwtToken = data.data?.tokenData.token;
      httpService.setJwt(jwtToken);
      sessionStorage.setItem("isLoggedIn", "true");
    }
    return data;

  } catch (err: any) {
    httpService.setJwt("");
    console.log(
      "ERROR OCCURRED WHILE CONNECTING TO THE API AUTH SERVER:::",
      err
    );
    const errBody = handleMyErrors(err);
    return { data: errBody }
  }
};

export const callDoForgotPasswordUrl = async (request: any) => {
  try {
    const url = endpoints.forgotPassword;
    const { data } = await httpService.post(url, request).catch((err:any) => {
      return handleMyErrors(err);
    });
    return data;

  } catch (err: any) {
    console.log(
      "ERROR OCCURRED WHILE CONNECTING TO THE FORGOT PASSWORD SERVICE:::",
      err
    );
    return handleMyErrors(err);
  }
}