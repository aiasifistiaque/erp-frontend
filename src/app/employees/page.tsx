'use client';
import Page from '@/components/navigation/page/Page';
import CustomTable from '@/components/table/CustomTable';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';
import Title from '@/components/table/Title';
import Toast from '@/components/toast/Toast';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetAllEmployeesQuery } from '@/store/services/employeeService';
import { Employee } from '@/store/services/types';
import { navigate } from '@/store/slices/routeSlice';
import { refresh, updateTable } from '@/store/slices/tableSlice';
import React, { useEffect } from 'react';

const Employeespage = () => {
	const dispatch = useAppDispatch();
	dispatch(navigate({ selected: 'employees' }));

	useEffect(() => {
		dispatch(refresh());
	}, []);

	const { page, limit, search, sort } = useAppSelector(state => state.table);

	const { data, isLoading, isError, error, isSuccess } = useGetAllEmployeesQuery({
		page,
		limit,
		search,
		sort,
	});

	const handleSort = (val: string) => {
		const sortVal: string = sort == val ? `-${val}` : val;
		dispatch(updateTable({ sort: sortVal, page: 1 }));
	};

	const header = (
		<>
			<Title val='name' onClick={() => handleSort('name')}>
				Name
			</Title>
			<Title val='email' onClick={() => handleSort('email')}>
				Email
			</Title>
			<Title>Phone</Title>
			<Title>...</Title>
		</>
	);

	const body =
		data &&
		data?.doc?.map((item: Employee, i: number) => (
			<TableRow key={i}>
				<TableData>{item?.name && item.name}</TableData>
				<TableData>{item?.email && item.email}</TableData>
				<TableData>{item?.phoneNumber && item.phoneNumber}</TableData>
			</TableRow>
		));

	return (
		<Page>
			<CustomTable col={7} isLoading={isLoading} header={header} data={isSuccess && data}>
				<>{body}</>
			</CustomTable>

			<Toast error={error} isError={isError} />
		</Page>
	);
};

export default Employeespage;
