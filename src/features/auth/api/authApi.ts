import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
    tagTypes: ["user"],
    endpoints: (builder) => ({
        userSignup: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
        }),
        userLogin: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: ["user"],
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PATCH",
                body: user,
            }),
            invalidatesTags: ["user"],
        }),
    }),
});

export const {
    useUserSignupMutation,
    useUserLoginQuery,
    useUpdateUserMutation,
} = authApi;
