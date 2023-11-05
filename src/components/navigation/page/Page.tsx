'use client';
import React, { useEffect } from 'react';
import { FlexProps, Flex } from '@chakra-ui/react';
import Header from '../header/Header';
import { useAuth } from '@/hooks/hooks';
import { useRouter } from 'next/navigation';
import Sidebar from '../sidebar/Sidebar';
import Body from './Body';
import CustomBreadCrumb from './CustomBreadCrumb';

const Page: React.FC<PageProps> = ({ children, ...props }) => {
	const { loading, isLoggedIn }: AuthStateProps = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !isLoggedIn) {
			router.replace('/login');
		}
	}, [isLoggedIn, loading]);
	if (loading) return null;

	if (isLoggedIn)
		return (
			<Flex w='100%' h='100vh'>
				<Sidebar />
				<Flex flexDirection='column' w='100%' minH='100vh'>
					<Header />
					<Body {...props}>
						<CustomBreadCrumb />
						{children}
					</Body>
				</Flex>
			</Flex>
		);

	return null;
};

type PageProps = FlexProps & {
	children: React.ReactNode;
};

type AuthStateProps = {
	isLoggedIn: boolean | undefined;
	loading: boolean;
};

export default Page;
