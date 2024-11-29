import { createSelector, createEntityAdapter} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import numeral from "numeral";

const ordersAdapter = createEntityAdapter({
  selectId: (order) => order.id,
});

const initialState = ordersAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getOrders: builder.query({
      query: ({ page, pageSize, currency }) => `/orders?page=${page}&pageSize=${pageSize}&currency=${currency}`,
      transformResponse: (responseData,_,params) => {
        let currency = params.currency ?? "";
        currency = " " + currency;
        let data = responseData.data.map((d)=>({
          ...d,
          sub_total    : numeral(d.sub_total).format("0,0.00") + currency,
          total_cost   : numeral(d.total_cost).format("0,0.00") + currency,
          total_profit : numeral((d.sub_total-d.total_cost).toFixed(2)).format("0,0.00") + currency
        }))
        return ordersAdapter.setAll(initialState, data);
      },
    }),
    getOrdersTotalNumber:builder.query({
      query: () => `/orders/total`,
    })
  })
})

export const {
  useGetOrdersQuery,
  useGetOrdersTotalNumberQuery
} = extendedApiSlice;

//export const selectOrdersResult = extendedApiSlice.endpoints.getOrders.select(args);

const selectOrdersData = createSelector(
  [state => state, (_, params) => params], 
  (state, params) => extendedApiSlice.endpoints.getOrders.select(params)(state)?.data ?? initialState
)
// const selectOrdersData = createSelector(
//   selectOrdersResult,
//   (ordersResult) => ordersResult.data ?? initialState
// );

export const {
  selectAll: selectAllOrders,
} = ordersAdapter.getSelectors(
  (state,params) => selectOrdersData(state,params) ?? initialState
);