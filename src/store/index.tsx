import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import tableSlice from './slices/tableSlice';
import authSlice from './slices/authSlice';
import { authApi } from './services/authService';
import { employeeApi } from './services/employeeService';
import { TOKEN_NAME } from '@/lib/constants';
import routeSlice from './slices/routeSlice';
import refreshTokenMiddleware from './services/refreshTokenMiddleware';
import apiService from './services/apiService';

// const preloadedState = {
// 	auth: {
// 		token:
// 			typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(TOKEN_NAME) as string) : null,
// 		loggedIn: typeof window !== 'undefined' ? !!localStorage.getItem(TOKEN_NAME) : false,
// 	},
// };

export const store = configureStore({
	reducer: {
		auth: authSlice,
		route: routeSlice,
		table: tableSlice,
		[authApi.reducerPath]: authApi.reducer,
		[employeeApi.reducerPath]: employeeApi.reducer,
	},
	//preloadedState,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			// .prepend(refreshTokenMiddleware)
			// .concat(authApi.middleware)
			// .concat(employeeApi.middleware)
			.concat(apiService.middleware)
			.concat(refreshTokenMiddleware),

	devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
	const state = store.getState();
	if (state.auth.token) {
		localStorage.setItem(TOKEN_NAME, state.auth.token);
	} else {
		localStorage.removeItem(TOKEN_NAME);
	}
});

setupListeners(store.dispatch);
