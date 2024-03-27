import { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { BaseQueryApi } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
// import { REHYDRATE } from 'redux-persist';
import type { AxiosError, AxiosRequestConfig } from "axios";

type AxiosBaseQueryProps = {
  baseUrl: string;
};

const axiosBaseQuery =({ baseUrl } : AxiosBaseQueryProps): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      body?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    BaseQueryApi,
    unknown
  > =>
  async (
    { url, method, body, params, headers },
    { signal }
    ) => {
    try {
      const result = await axios({
        url: url.startsWith("http") ? url : baseUrl + url,
        method: method ?? "GET",
        data: body,
        timeout: typeof window === "undefined" ? 30000 : 600000,
        params,
        ...(typeof window === "undefined"
          ? {
              validateStatus: () => {
                return true;
              },
            }
          : {}),
        signal,
        headers: {
          //...getAuthHeader(),
          ...headers,
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status ?? null,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  }),
  //   extractRehydrationInfo(action, { reducerPath }) {
  //     if (action.type === REHYDRATE) {
  //       return action.payload?.[reducerPath];
  //     }
  //     if (action.type === HYDRATE) {
  //       return action.payload[reducerPath];
  //     }
  //     return undefined;
  //   },
  // tagTypes: [],
  endpoints: () => ({}),
});
