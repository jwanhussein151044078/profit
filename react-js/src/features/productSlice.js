import { createSelector, createEntityAdapter} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import numeral from "numeral";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

const initialState = productsAdapter.getInitialState();

export const extendedProductApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: ({ page, pageSize, currency }) => `/products?page=${page}&pageSize=${pageSize}&currency=${currency}`,
      transformResponse: (responseData,_,params) => {
        let currency = params.currency ?? "";
        currency = " " + currency;
        let data = responseData.data.map((d)=>({
          ...d,
          sub_total    : numeral(d.sub_total).format("0,0.00") + currency,
          total_cost   : numeral(d.total_cost).format("0,0.00") + currency,
          total_profit : numeral((d.sub_total-d.total_cost).toFixed(2)).format("0,0.00") + currency
        }))
        return productsAdapter.setAll(initialState, data);
      },
    }),
    getProductTotalNumber:builder.query({
      query: () => `/products/total`,
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductTotalNumberQuery
} = extendedProductApiSlice;

const selectProductsData = createSelector(
  [state => state, (_, params) => params], 
  (state, params) => extendedProductApiSlice.endpoints.getProducts.select(params)(state)?.data ?? initialState
);

export const {
  selectAll: selectAllProducts,
} = productsAdapter.getSelectors(
  (state,params) => selectProductsData(state,params) ?? initialState
);