'use client';
import React, { useEffect } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import Header from '../header/Header';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';
import Sidebar from '../sidebar/Sidebar';

type PageProps = FlexProps & {
	children: React.ReactNode;
};

type AuthStateProps = {
	isLoggedIn: boolean | undefined;
	loading: boolean;
};

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
			<Flex w='100%' h='100vh' {...props}>
				<Sidebar />
				<Flex flexDirection='column' w='100%' minH='100vh' {...props}>
					<Header />
					<Flex
						flex={1}
						flexDirection='column'
						p={8}
						bg='bg.200'
						h='calc (100vh - 64px)'
						overflowY='scroll'>
						{children}
					</Flex>
				</Flex>
			</Flex>
		);

	return null;
};

export default Page;
