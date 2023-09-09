'use client';
import FormContainer from '@/components/form/container/FormContainer';
import { useAppSelector, useAuth } from '@/hooks';
import { Center, Flex, FlexProps, Heading, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react';

type AuthPageProps = FlexProps & {
	children: React.ReactNode;
	heading: string;
	onSubmit: (e: any) => void;
	isLoading: boolean;
};

type AuthStateProps = {
	isLoggedIn: boolean | undefined;
	loading: boolean;
};

const AuthPage: React.FC<AuthPageProps> = ({
	children,
	isLoading,
	onSubmit,
	heading,
	...props
}) => {
	const router = useRouter();
	const { isLoggedIn, loading }: AuthStateProps = useAuth();

	useEffect(() => {
		if (isLoggedIn) router?.replace('/');
	}, [isLoggedIn, router]);

	if (loading) return null;

	if (!isLoggedIn)
		return (
			<Flex flexDirection='column' bg='bg.200' w='100%' minH='100vh' {...props}>
				<Flex w='full' align='center' borderBottomWidth={2} h={16} px={8} bg='bg.100'>
					<Heading size='md'>THINKCRYPT ERP SYSTEM</Heading>
				</Flex>
				<Flex py={16} gap={6} flexDir='column' flex={1}>
					<Center flexDir='column' gap={2} textAlign='center'>
						<Heading>{heading}</Heading>
					</Center>
					<FormContainer isLoading={isLoading} buttonText='Login' onSubmit={onSubmit}>
						{children}
					</FormContainer>
				</Flex>
			</Flex>
		);

	return null;
};

export default AuthPage;
