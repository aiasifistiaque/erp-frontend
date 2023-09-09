import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

type TableHeadingProps = HeadingProps & {
	children: string;
};

const TableHeading: React.FC<TableHeadingProps> = ({ children, ...props }) => {
	return (
		<Heading fontSize={12} size='xs' fontWeight='700' {...props}>
			{children}
		</Heading>
	);
};

export default TableHeading;
