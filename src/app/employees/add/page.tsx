'use client';
import Page from '@/components/navigation/page/Page';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';

const page = () => {
	const pathname = usePathname();
	let path = pathname.split('/');
	const segment = useSelectedLayoutSegment();
	const segments = useSelectedLayoutSegments();
	return (
		<Page>
			<Link href='/employees/mubbin'>Go to Link</Link>
		</Page>
	);
};

export default page;
