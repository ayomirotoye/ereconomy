import { endpoints } from "../utils/apiCallEndpoints";
import { handleMyErrors } from "../utils/errorHandlingUtil";
import { buildUrlPaths } from "../utils/helpers";
import httpService from "./httpService";

export const callInitiateCardPayment = async (initiateCardPaymentRequest: any) => {
    const url = endpoints.initiateCardPayment;
    const { data } = await httpService.post(url, initiateCardPaymentRequest).catch((err: any) => {
        return { data: handleMyErrors(err) };
    });
    return data;
}

export const callVerifyCardPayment = async (reference: string) => {
    const url = endpoints.verifyCardPayment;
    const { data } = await httpService.get(buildUrlPaths([url, reference]));
    return data;
}