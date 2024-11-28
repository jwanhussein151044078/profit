import { configureStore } from "@reduxjs/toolkit";
import getAppSettingsReducer from "../features/appSettingSlice";

export const store = configureStore({
    reducer: {
        appSettings : getAppSettingsReducer
    },
})