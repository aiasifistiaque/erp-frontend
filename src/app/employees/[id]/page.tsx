'use client';
import Page from '@/components/navigation/page/Page';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useParams, useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

const page = () => {
	const param = useParams();

	return (
		<Page>
			<Text>{JSON.stringify(param)}</Text>
			<Link href='/employees/add'>Back to add</Link>
		</Page>
	);
};

export default page;
