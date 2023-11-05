import React from 'react';
import { Button, CloseButton, Flex, FlexProps, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

type CreateHeaderProps = FlexProps & {
	children?: React.ReactNode;
	button: string;
	title: string;
	isLoading?: boolean;
	redirect: string;
};

const CreateHeader: React.FC<CreateHeaderProps> = ({
	children,
	button,
	title,
	isLoading,
	redirect,
	...props
}) => {
	const router = useRouter();
	const back = (): void => {
		router.replace(redirect);
	};
	return (
		<Flex
			bg='white.100'
			borderBottomWidth={2}
			w='full'
			h={16}
			justify='space-between'
			{...props}
			px={8}>
			<Flex flex={1} align='center' gap={4}>
				<CloseButton onClick={back} />
				<Heading size='sm'>{title}</Heading>
			</Flex>
			<Flex align='center' gap={2}>
				<Button size='sm' colorScheme='red'>
					Cancel
				</Button>
				<Button isLoading={isLoading} size='sm' colorScheme='green' type='submit'>
					{button}
				</Button>
			</Flex>
		</Flex>
	);
};

export default CreateHeader;
