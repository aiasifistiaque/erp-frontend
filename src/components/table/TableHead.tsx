import React from 'react';
import { Thead, FlexProps } from '@chakra-ui/react';

type TableHeadProps = FlexProps & {
	children: React.ReactNode;
	onClick?: () => void;
	type?: string;
};

export const TableHead: React.FC<TableHeadProps> = ({ children, onClick, ...props }) => {
	return <Thead {...props}>{children}</Thead>;
};

export default TableHead;
