import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TableProps = {
	page: number;
	limit: number;
	search?: string;
	sort: string;
	skip: number;
	docsInPage?: number;
	totalDocs?: number;
	totalPages?: number;
};

type UpdateProps = {
	page?: number;
	limit?: number;
	search?: string;
	sort?: string;
};

// Define the initial state
const initialState: TableProps = {
	page: 1,
	limit: 10,
	sort: '-createdAt',
	skip: 0,
};

export const tableSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {
		updateTable: (state, action: PayloadAction<UpdateProps>) => {
			state.page = action.payload.page || state.page;
			state.limit = action.payload.limit || state.limit;
			state.search = action.payload.search || state.search;
			state.sort = action.payload.sort || state.sort;
		},

		refresh: state => {
			state.page = 1;
			state.search = '';
			state.limit = 10;
			state.sort = '-createdAt';
		},
	},
});

export const { refresh, updateTable } = tableSlice.actions;

export default tableSlice.reducer;
