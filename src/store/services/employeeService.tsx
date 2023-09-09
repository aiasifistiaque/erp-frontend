import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as lib from '../../lib/constants';
import { Data, TableProps, User } from './types';

const tagTypes = ['Employees'];

export const employeeApi = createApi({
	reducerPath: 'employeeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${lib.api.backend}`,
		prepareHeaders: (headers, { getState }) => {
			const token: string = (getState() as any).auth?.token;
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	tagTypes: tagTypes,
	endpoints: builder => ({
		getAllEmployees: builder.query<Data, TableProps>({
			query: ({ sort = '-createdAt', page = 1, limit = 10, search = '' }) => ({
				url: '/employees',
				params: { sort, page, limit, search },
			}),
			providesTags: ['Employees'],
		}),

		addEmployee: builder.mutation({
			query(body) {
				return {
					url: `/employees`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['Employees'],
		}),
	}),
});

export const { useGetAllEmployeesQuery, useAddEmployeeMutation } = employeeApi;
