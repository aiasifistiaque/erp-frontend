import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Stack,
	Flex,
	Button,
	InputGroup,
	Input,
	InputRightAddon,
	Skeleton,
	TableProps,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { TbRefresh, TbSearch } from 'react-icons/tb';
import TableHeading from './TableHeading';
import Pagination from './Pagination';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { refresh, updateTable } from '@/store/slices/tableSlice';

type CustomTableProps = TableProps & {
	children: React.ReactNode;
	header?: React.ReactNode;
	data: any;
	isLoading: boolean;
	col?: number;
};

const CustomTable: React.FC<CustomTableProps> = ({ children, header, data, isLoading, col }) => {
	const [value, setValue] = useState('');
	const { search } = useAppSelector(state => state.table);
	const dispatch = useAppDispatch();

	const onReset = () => {
		dispatch(refresh());
	};

	const handleSearch = () => {
		dispatch(updateTable({ search: value }));
	};

	const loading = [...Array(10)].map((x, i) => (
		<Tr key={i}>
			{[...Array(col || 5)].map((y, j) => (
				<Td key={j} py={4}>
					<Skeleton w='100%' h={5} />
				</Td>
			))}
		</Tr>
	));

	return (
		<Stack w='100%' spacing={2}>
			<TableContainer bg='white' w='100%' borderRadius={8} borderWidth={2} minH={400}>
				<Flex px={2} justify='space-between' align='center'>
					<Flex align='center' gap={1}>
						<Button size='sm' borderRadius={4} onClick={onReset}>
							<TbRefresh />
						</Button>
						<InputGroup size='sm' w={300}>
							<Input
								borderRadius={4}
								placeholder='Search'
								value={value}
								onChange={e => setValue(e.target.value)}
							/>
							<InputRightAddon
								as={Button}
								children={<TbSearch color='black' />}
								onClick={handleSearch}
							/>
						</InputGroup>
						<TableHeading ml={2}>{`ITEMS (${data?.totalDocs && data.totalDocs})`}</TableHeading>
					</Flex>

					<Flex align='center' justify='flex-end' gap={4}>
						<Pagination data={data && data} />
					</Flex>
				</Flex>
				<Table size='sm'>
					<Thead>
						<Tr>{header}</Tr>
					</Thead>
					<Tbody>{isLoading ? loading : children}</Tbody>
				</Table>
			</TableContainer>
		</Stack>
	);
};

export default CustomTable;
