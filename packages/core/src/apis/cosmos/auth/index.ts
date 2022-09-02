import { instance } from "../../../utils";
import type { PaginationParams } from "../base";
import type {
  AccountResponse,
  AccountsResponse,
  ParamsResponse,
} from "./types";

export type { AccountResponse, AccountsResponse };

export const getAccounts =
  (baseURL: string) =>
  async (pagination?: PaginationParams): Promise<AccountsResponse> => {
    return (
      await instance(baseURL).get("/cosmos/auth/v1beta1/accounts", {
        params: pagination,
      })
    ).data;
  };

export const getAccountByAddress =
  (baseURL: string) =>
  async (address: string): Promise<AccountResponse> => {
    return (
      await instance(baseURL).get(`/cosmos/auth/v1beta1/accounts/${address}`)
    ).data;
  };

export const getParams =
  (baseURL: string) => async (): Promise<ParamsResponse> => {
    return (await instance(baseURL).get("/cosmos/auth/v1beta1/params")).data;
  };
