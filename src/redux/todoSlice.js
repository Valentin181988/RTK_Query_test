import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://62d2d78081cb1ecafa66b63b.mockapi.io/api/v1' }),
        tagTypes: ['Todos'],
    endpoints: builder => ({
      fechTodos: builder.query({
        query: () => `/todos`,
        providesTags: ['Todos'],
      }),
      deleteTodo: builder.mutation({
        query: todoId => ({
            url: `/todos/${todoId}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Todos'],
      }),
    }),
  });
  
  export const { useFechTodosQuery, useDeleteTodoMutation } = todosApi;