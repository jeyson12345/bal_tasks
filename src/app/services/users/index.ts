import { IBaseDataRes } from '../../type';
import { api } from '../api';
import { ILogin, ILoginRes, IOrder, IOrderRes, ITask, IUser } from './type';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Validation endpoint
    sendOrders: build.mutation<IOrderRes, IOrder>({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
      }),
    }),

    // LOgin
    loginConfig: build.mutation<ILoginRes, ILogin>({
      query: (body) => ({
        url: '/auth/login/',
        method: 'POST',
        body,
      }),
    }),

    getTasks: build.query<IBaseDataRes<ITask>, string>({
      query: (params) => ({ url: `/tasks/?${params}` }),
      providesTags: ['tasks'],
    }),
    getTaskID: build.query<ITask, string>({
      query: (id) => ({ url: `/tasks/${id}/` }),
    }),
    updateStatus: build.mutation<any, { id: number; body: { status: string } }>(
      {
        query: ({ id, body }) => ({
          url: `/tasks/${id}/update_status/`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['tasks'],
      }
    ),

    getUsers: build.query<IBaseDataRes<IUser>, string>({
      query: (params) => ({ url: `/users/?${params}` }),
      providesTags: ['users'],
    }),
  }),
});

export const {
  useSendOrdersMutation,
  useLoginConfigMutation,

  useGetTasksQuery,
  useGetTaskIDQuery,
  useUpdateStatusMutation,

  useGetUsersQuery,
} = authApi;
