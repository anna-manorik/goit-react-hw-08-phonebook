// here must be api for Auth, need to use RTK query for backend insteed createAsyncThunk 

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: ({ name, email, password }) => {
        console.log(name, email, password);
        
        return {
          url: `/users/signup`,
          method: 'POST',
          body: {
            name: name,
            email: email,
            password: password,
          },
        };
      },
    }),
  }),
});

export const { useAddUserMutation } = usersApi;