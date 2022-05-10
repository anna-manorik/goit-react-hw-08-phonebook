import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log(token);
      
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: ({ name, email, password }) => {
        return {
          url: '/users/signup',
          method: 'POST',
          body: {
            name: name,
            email: email,
            password: password,
          },
        };
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      })
    }),
    logout: builder.mutation({
      query: (credentials) => ({
        url: '/users/logout',
        method: 'POST',
        body: credentials,
      })
    }),
  }),
});

export const { useAddUserMutation, useLoginMutation, useLogoutMutation } = usersApi;