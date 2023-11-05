import { User } from './types';
import apiService from './apiService';

export const authApi = apiService.injectEndpoints({
	endpoints: builder => ({
		getSelf: builder.query<User, void>({
			query: () => `/auth/self`,
			providesTags: ['Self'],
		}),

		login: builder.mutation({
			query(body) {
				return {
					url: `/auth/login`,
					method: 'POST',
					body,
				};
			},
		}),

		register: builder.mutation({
			query(body) {
				return {
					url: `/auth/register`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: [],
		}),
		resetPasswordChange: builder.mutation({
			query(body) {
				return {
					url: `/auth/request-password-change`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: [],
		}),
		verifyReestToken: builder.query({
			query: id => `/auth/verify-reset-token/${id}`,
		}),

		resetPassword: builder.mutation({
			query(body) {
				return {
					url: `/auth/reset`,
					method: 'POST',
					body,
				};
			},
			invalidatesTags: [],
		}),
	}),
});

// export const authApi = createApi({
// 	reducerPath: 'authApi',
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: `${lib.api.backend}/auth`,
// 		credentials: 'include',
// 		prepareHeaders: (headers, { getState }) => {
// 			const token: string = (getState() as any).auth?.token;
// 			if (token) {
// 				headers.set('authorization', token);
// 			}
// 			return headers;
// 		},
// 	}),
// 	tagTypes: tagTypes,
// 	endpoints: builder => ({
// 		getSelf: builder.query<User, void>({
// 			query: () => `/self`,
// 			providesTags: ['Self'],
// 		}),

// 		login: builder.mutation({
// 			query(body) {
// 				return {
// 					url: `/login`,
// 					method: 'POST',
// 					body,
// 				};
// 			},
// 		}),

// 		register: builder.mutation({
// 			query(body) {
// 				return {
// 					url: `/register`,
// 					method: 'POST',
// 					body,
// 				};
// 			},
// 			invalidatesTags: [],
// 		}),
// 		resetPasswordChange: builder.mutation({
// 			query(body) {
// 				return {
// 					url: `/request-password-change`,
// 					method: 'POST',
// 					body,
// 				};
// 			},
// 			invalidatesTags: [],
// 		}),
// 		verifyReestToken: builder.query({
// 			query: id => `/verify-reset-token/${id}`,
// 		}),

// 		resetPassword: builder.mutation({
// 			query(body) {
// 				return {
// 					url: `/reset`,
// 					method: 'POST',
// 					body,
// 				};
// 			},
// 			invalidatesTags: [],
// 		}),
// 		refreshToken: builder.mutation({
// 			query: body => ({ url: '/refresh-token', method: 'POST', body }),
// 		}),
// 	}),
// });

export const {
	useLoginMutation,
	useRegisterMutation,
	useGetSelfQuery,
	useResetPasswordChangeMutation,
	useVerifyReestTokenQuery,
	useResetPasswordMutation,
} = authApi;
