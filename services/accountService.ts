import { endpoints } from "../utils/apiCallEndpoints";
import { handleMyErrors } from "../utils/errorHandlingUtil";
import httpService from "./httpService";

export const callGetUserAccountBalance = async () => {
    const url = endpoints.userBalanceEndpoint;
    const { data } = await httpService.get(url).catch((err: any) => {
        return { data: handleMyErrors(err) };
    });
    return data;
}