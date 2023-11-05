import { Employee, ListType, TableProps } from './types';
import apiService from './apiService';

export const employeeApi = apiService.injectEndpoints({
	endpoints: builder => ({
		getAllEmployees: builder.query<ListType<Employee>, TableProps>({
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
