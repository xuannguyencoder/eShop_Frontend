import { api } from "../api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMenuGetMenus: build.query<
      GetMenuGetMenusApiResponse,
      GetMenuGetMenusApiArg
    >({
      query: (queryArg) => ({
        url: `/Menu/GetMenus`,
        params: { groupCode: queryArg.groupCode },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as content_menu };
export type GetMenuGetMenusApiResponse =
  /** status 200 Success */ GetMenusResponseMethodResultRead;
export type GetMenuGetMenusApiArg = {
  groupCode: string;
};
export type SubMenu2Model = {
  name?: string | null;
  url?: string | null;
};
export type SubMenu1Model = {
  name?: string | null;
  url?: string | null;
  subMenus?: SubMenu2Model[] | null;
};
export type MenuModel = {
  menuName?: string | null;
  url?: string | null;
  subMenus?: SubMenu1Model[] | null;
};
export type GetMenusResponse = {
  groupCode?: string | null;
  groupName?: string | null;
  menus?: MenuModel[] | null;
};
export type GetMenusResponseMethodResult = {
  statusCode?: string | null;
  value?: GetMenusResponse;
};
export type GetMenusResponseMethodResultRead = {
  statusCode?: string | null;
  value?: GetMenusResponse;
  isSuccess?: boolean;
  tempData?: {
    [key: string]: any;
  } | null;
};
export type VoidMethodResult = {
  statusCode?: string | null;
};
export type ErrorMessageModel = {
  errorCode?: string | null;
  content?: string | null;
};
export type VoidMethodResultRead = {
  isSuccess?: boolean;
  statusCode?: string | null;
  errorMessages?: ErrorMessageModel[] | null;
};
export const { useGetMenuGetMenusQuery, useLazyGetMenuGetMenusQuery } =
  injectedRtkApi;
