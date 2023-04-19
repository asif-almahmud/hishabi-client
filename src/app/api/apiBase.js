import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBase = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
    tagTypes: ["User", "Transaction", "Category"],
    endpoints: (builder) => ({}),
});
