import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://62d2d78081cb1ecafa66b63b.mockapi.io/api/v1' }),
    endpoints: builder => ({
      fechTodos: builder.query({
        query: () => `/todos`,
      }),
    }),
  });
  
  export const { useFechTodosQuery } = todosApi;