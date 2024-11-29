import { createSlice } from "@reduxjs/toolkit";
import { CURRENCY, LISTINGMETHOD } from "../constants";

const initialState = {
  currency       : CURRENCY.USD,
  listingMethod  : LISTINGMETHOD.ORDER,
  page           : 1,
  pageSize       : 25
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
      state.page = 1 ;
    },
    onChangeTablePage(state,action){
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
    }
  }
});

export const getAppSettings = (state) => state.appSettings;
export const { toggleCurrency, toggleListingMethod , onChangeTablePage } = appSettingSlice.actions;
export default appSettingSlice.reducer;