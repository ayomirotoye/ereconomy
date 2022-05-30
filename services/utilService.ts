import { responseCodes, responseMessages } from "../static/constants";
import { endpoints } from "../utils/apiCallEndpoints";
import httpService from "./httpService";

export const callSendEmailVerificationOtpUrl = async (email: string, purpose = "EMAIL_VALIDATION_AT_ONBOARDING") => {
    const url = endpoints.emailVerificationOtp;
    switch (purpose) {
        case "EMAIL_VALIDATION_AT_ONBOARDING":
        case "FORGOT_PASSWORD_EMAIL_VALIDATION":
            break;
        default:
            return {
                responseCode: responseCodes.BAD_REQUEST,
                message: responseMessages.OPERATION_NOT_SUPPORTED
            }
    }
    const { data } = await httpService.post(url, {
        user: email,
        purpose: purpose
    });
    return data;
}