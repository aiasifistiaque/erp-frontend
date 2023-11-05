import { Flex, FlexProps, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type PageHeadingProps = FlexProps & {
	title: string;
	button: string;
	href?: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({ title, href, button, ...props }) => {
	const btn = (
		<Button size='sm' colorScheme='green'>
			{button}
		</Button>
	);
	const toButton = href ? <Link href={href}>{btn}</Link> : btn;

	return (
		<Flex justify='space-between' {...props} align='center'>
			<Heading size='lg'>{title}</Heading>
			<Flex gap={2}>
				<>{toButton}</>
			</Flex>
		</Flex>
	);
};

export default PageHeading;
