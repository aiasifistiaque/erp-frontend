import { TOKEN_NAME } from '../../lib/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
	token: string | null;
	loggedIn: boolean;
};

// Define the initial state
const initialState: AuthState = {
	token:
		typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) != null
			? localStorage.getItem(TOKEN_NAME)
			: null,
	loggedIn: typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) !== null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		logout: state => {
			localStorage.setItem(TOKEN_NAME, 'null');
			state.token = null;
			state.loggedIn = false;
			document.location.href = '/login';
		},
		login: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
			state.loggedIn = true;
			localStorage.setItem(TOKEN_NAME, action.payload);
			document.location.href = '/';
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
