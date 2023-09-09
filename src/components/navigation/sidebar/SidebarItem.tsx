import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { navigate } from '@/store/slices/routeSlice';

type SidebarItemProps = {
	children: string;
	href: string;
	route: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ href, children, route }) => {
	const { selected } = useAppSelector(state => state.route);
	const dispatch = useAppDispatch();

	const changeRoute = (to: string) => {
		dispatch(navigate({ selected: to }));
	};

	return (
		<Flex
			onClick={() => changeRoute(route)}
			as={Link}
			href={href}
			align='center'
			px={2}
			h={10}
			transition='all .2s ease-in-out'
			bg={selected == route ? 'green.500' : 'transparent'}
			color={selected == route ? '#fff' : '#333'}
			borderRadius='md'>
			<Text fontWeight='600' letterSpacing={-1} fontSize='.9rem'>
				<Text fontWeight='600' letterSpacing={-1} fontSize='.9rem'>
					{children}
				</Text>
			</Text>
		</Flex>
	);
};

export default SidebarItem;
