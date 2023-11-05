// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { api } from '@/lib/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tagTypes = ['Self', 'Login', 'Register', 'Employees'];

// initialize an empty api service that we'll inject endpoints into later as needed
const apiService = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${api.backend}`,
		credentials: 'include',
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
		refreshToken: builder.mutation({
			query: body => ({ url: '/auth/refresh-token', method: 'POST', body }),
		}),
	}),
});

export default apiService;
