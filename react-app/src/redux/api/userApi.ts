import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../components/users.types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getusers: builder.query({
      query: () => '/user',
    }),
    createUser: builder.mutation<User, User  & {id:number}>({
      query: (user: User) => ({
        url: `/user`,
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: builder.mutation<User, { id: number; user: Partial<User>  }>({
      query: ({ id, user }) => ({
        url: `/user/${id}`,
        method: 'PATCH',
        body: user,
      }),
    }),
    deleteUser: builder.mutation<boolean, number>({
      query: (id: number) => ({
        url: `/user/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetusersQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
