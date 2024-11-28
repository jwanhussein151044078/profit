import { createSlice } from "@reduxjs/toolkit";
import { CURRENCY, LISTINGMETHOD } from "../constants";

const initialState = {
  currency       : CURRENCY.USD,
  listingMethod  : LISTINGMETHOD.ORDER
};

const appSettingSlice = createSlice({
  name : "appSettings",
  initialState,
  reducers:{
    toggleCurrency(state,action){
      if(state.currency == CURRENCY.USD){
        state.currency = CURRENCY.TL;
      }else{
        state.currency = CURRENCY.USD;
      }
    },
    toggleListingMethod(state,action){
      if(state.listingMethod == LISTINGMETHOD.ORDER){
        state.listingMethod = LISTINGMETHOD.PRODUCT;
      }else{
        state.listingMethod = LISTINGMETHOD.ORDER;
      }
    }
  }
});

export const getAppSettings = (state) => state.appSettings;
export const { toggleCurrency, toggleListingMethod } = appSettingSlice.actions;
export default appSettingSlice.reducer;