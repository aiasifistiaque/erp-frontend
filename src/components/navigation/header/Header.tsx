import React from 'react';
import {
	Flex,
	Heading,
	Text,
	Badge,
	Box,
	Stack,
	Button,
	Center,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { useGetSelfQuery } from '@/store/services/authService';
import { useAppDispatch } from '@/hooks/hooks';
import { logout } from '@/store/slices/authSlice';
import { BiUser, BiChevronDown } from 'react-icons/bi';

const Header = () => {
	const { data, isLoading, isError } = useGetSelfQuery();
	const dispatch = useAppDispatch();

	const onLogout = (): void => {
		dispatch(logout());
	};

	const userInfo = data && (
		<Stack spacing={0} borderBottom='2px solid whitesmoke' p={2}>
			<Heading size='sm'>{data?.name && data.name}</Heading>
			<Text fontSize={14}>{data?.email && data.email}</Text>
			<Box>
				<Badge colorScheme='green'>{data?.role && data.role}</Badge>
			</Box>
		</Stack>
	);

	return (
		<Flex
			px={6}
			bg='bg.100'
			h={16}
			minH={16}
			w='full'
			align='center'
			justify='space-between'
			borderBottomWidth={2}>
			<Flex>
				<Heading size='md'>THINKCRYPT ERP</Heading>
			</Flex>
			<Menu>
				<MenuButton as={Button} rightIcon={<BiChevronDown />} size='sm' variant='ghost'>
					<Center borderRadius='full' bg='whitesmoke' boxSize={8}>
						<BiUser size={20} />
					</Center>
				</MenuButton>
				<MenuList>
					<>{userInfo}</>
					<Box pt={2}>
						<MenuItem onClick={onLogout}>Logout</MenuItem>
					</Box>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default Header;
