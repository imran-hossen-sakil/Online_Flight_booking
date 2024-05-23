import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/user/authSlice";
import flightSlice from "./features/flights/flightSlice";

export const store = configureStore({
    reducer: {
        user: authSlice,
        flight: flightSlice
    }
})