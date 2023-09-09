import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PageProps = {
	title: string | undefined;
	selected: string;
};

type NavigateProps = {
	selected: string;
	title?: string;
};

// Define the initial state
const initialState: PageProps = {
	title: 'dashboard',
	selected: 'dashboard',
};

export const routeSlice = createSlice({
	name: 'route',
	initialState,
	reducers: {
		navigate: (state, action: PayloadAction<NavigateProps>) => {
			const { selected, title } = action.payload;
			state.selected = selected;
			state.title = title;
		},
	},
});

export const { navigate } = routeSlice.actions;

export default routeSlice.reducer;
