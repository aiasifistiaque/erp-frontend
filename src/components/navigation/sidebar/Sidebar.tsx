import { sidebar } from '@/lib/data';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SidebarItem from './SidebarItem';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
	const logo = (
		<Flex h={16} px={4} borderBottomWidth={2} align='center'>
			<Heading size='md'>ADMIN</Heading>
		</Flex>
	);

	const body = (
		<Flex flex={1}>
			<Stack w='full' p={4} spacing={0.5}>
				{sidebar.map((item, i) => (
					<SidebarItem key={i} href={item?.href} route={item?.route}>
						{item?.title}
					</SidebarItem>
				))}
			</Stack>
		</Flex>
	);
	return (
		<Flex h='100vh' bg='white' w='240px' borderRightWidth={2} flexDir='column'>
			{logo}
			{body}
		</Flex>
	);
};

export default Sidebar;
