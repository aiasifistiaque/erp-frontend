import { Td, FlexProps } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

type TableDataProps = FlexProps & {
	children: any;
	date?: boolean;
	price?: boolean;
};

const TableData: React.FC<TableDataProps> = ({ children, date, price }) => {
	const fontWeight = price ? '600' : '500';
	const text = price
		? `$ ${children.toLocaleString()}`
		: date
		? moment(children).calendar()
		: children;

	return (
		<Td fontSize={date ? '.7rem' : '.88rem'} p='1rem' fontWeight={fontWeight}>
			{text}
		</Td>
	);
};

export default TableData;
