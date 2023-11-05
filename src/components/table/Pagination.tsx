import { Center, Flex, Select } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HiArrowUturnLeft, HiArrowUturnRight } from 'react-icons/hi2';
import TableHeading from './TableHeading';
import SquareButton from './SquareButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateTable } from '@/store/slices/tableSlice';

type PaginationProps = {
	data: any;
};

const Pagination: React.FC<PaginationProps> = ({ data }) => {
	const { page, limit } = useAppSelector(state => state.table);
	const dispatch = useAppDispatch();

	const update = ({ setPage, setLimit }: { setPage?: number; setLimit?: number }) => {
		dispatch(updateTable({ page: setPage, limit: setLimit }));
	};

	const toStart = () => {
		update({ setPage: 1 });
	};

	const toLast = () => {
		update({ setPage: data?.totalPages });
	};

	const next = () => {
		if (page < data?.totalPages) update({ setPage: page + 1 });
	};

	const back = () => {
		update({ setPage: page - 1 });
	};

	const perpage = (
		<>
			<TableHeading>SHOWING RESULTS</TableHeading>
			<Select
				cursor='pointer'
				size='sm'
				fontWeight='600'
				fontSize={12}
				borderRadius={4}
				value={limit}
				onChange={(e: any) => update({ setLimit: e.target.value })}>
				<option value={10}>10</option>
				<option value={20}>20</option>
				<option value={50}>50</option>
				<option value={100}>100</option>
			</Select>
		</>
	);

	return (
		<Flex justify='flex-end' align='center'>
			<Center gap={2}> {perpage}</Center>
			<Flex borderRadius={4} p={2} alignSelf='flex-end'>
				<SquareButton label='To the beginning' onClick={toStart} borderLeftRadius={4}>
					<HiArrowUturnLeft size={18} />
				</SquareButton>
				<SquareButton label='Previous Page' onClick={back}>
					<IoIosArrowBack size={20} />
				</SquareButton>

				<Center h={8} px={2} fontSize='.9rem' userSelect='none'>
					Page {page} of {data?.totalPages && data.totalPages}
				</Center>
				<SquareButton label='Next Page' onClick={next}>
					<IoIosArrowForward size={20} />
				</SquareButton>
				<SquareButton label='To the end' onClick={toLast} borderRightRadius={4}>
					<HiArrowUturnRight size={18} />
				</SquareButton>
			</Flex>
		</Flex>
	);
};

export default Pagination;
