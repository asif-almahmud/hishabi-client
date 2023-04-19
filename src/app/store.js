import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiBase } from "./api/apiBase";

export const store = configureStore({
    reducer: {
        [apiBase.reducerPath]: apiBase.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiBase.middleware),
    devTools: true,
});

setupListeners(store.dispatch);
