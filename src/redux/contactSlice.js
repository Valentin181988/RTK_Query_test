import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://62d4029ccd960e45d4519519.mockapi.io/api/v1' }),
        tagTypes: ['Todos'],
    endpoints: builder => ({
      fechTodos: builder.query({
        query: () => `/contacts`,
        providesTags: ['Todos'],
      }),
      deleteTodo: builder.mutation({
        query: todoId => ({
            url: `/contacts/${todoId}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Todos'],
      }),
      createTodo: builder.mutation({
        query: ({name, number}) => ({
            url: 'contacts',
            method: 'POST',
            body: {
                name: name,
                number: number,
            }, 
        }),
        invalidatesTags: ['Todos'],
      }),
    }),
  });
  
  export const { 
    useFechTodosQuery, 
    useDeleteTodoMutation, 
    useCreateTodoMutation } = contactsApi;