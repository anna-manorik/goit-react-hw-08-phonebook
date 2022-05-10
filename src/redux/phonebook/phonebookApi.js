import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => {
          return {
            url: `/contacts`,
            method: 'GET',
          }
      },
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => {
        return {
          url: `/contacts`,
          method: 'POST',
          body: {
            name: name,
            number: number,
          },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
        query: id => {
          return {
            url: `/contacts/${id}`,
            method: 'DELETE',
          }
        },
        invalidatesTags: ['Contacts'],
      }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;