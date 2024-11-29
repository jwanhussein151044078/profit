import { configureStore } from "@reduxjs/toolkit";
import getAppSettingsReducer from "../features/appSettingSlice";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
    reducer: {
        appSettings : getAppSettingsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
})