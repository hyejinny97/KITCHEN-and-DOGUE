import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const menusApi = createApi({
  reducerPath: 'menus',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder) {
    return {
      fetchSignatureMenu: builder.query({
        query: () => {
          return {
            url: '/signatureMenu',
            method: 'GET'
          }
        }
      }),
      fetchDailyMenu: builder.query({
        query: () => {
          return {
            url: '/dailyMenu',
            method: 'GET'
          }
        }
      }),
      fetchSpecialMenu: builder.query({
        query: () => {
          return {
            url: '/specialMenu',
            method: 'GET'
          }
        }
      }),
      fetchGoods: builder.query({
        query: (goodsName) => {
          return {
            url: `/${goodsName}`,
            method: 'GET'
          }
        }
      })
    }
  }
})

export { menusApi };
export const { useFetchSignatureMenuQuery, useFetchDailyMenuQuery, useFetchSpecialMenuQuery, useFetchGoodsQuery } = menusApi;