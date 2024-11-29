import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import numeral from "numeral";

const profitAdapter = createEntityAdapter()

const initialState = profitAdapter.getInitialState();

export const profitApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getTotalProfit: builder.query({
          query: ({currency}) => `/profit/calc?currency=${currency}`,
          transformResponse: (responseData,_,params) => {
            let currency = params.currency ?? "";
            return profitAdapter.setAll(initialState, [{totalProfit : numeral(responseData.data).format("0,0.00") +" "+ currency ,id : "totalProfit"}])
          }
      })
  })
})

export const {
  useGetTotalProfitQuery
} = profitApiSlice