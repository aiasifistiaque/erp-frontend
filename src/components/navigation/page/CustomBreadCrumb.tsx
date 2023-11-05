import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const CustomBreadCrumb = () => {
	const pathnamee = usePathname();
	let path = pathnamee.split('/');

	return (
		<Breadcrumb separator='/' spacing={1} fontSize='14px'>
			{path.map((item, i) => {
				const arr = path.slice(0, i + 1);
				let result = i === 0 ? '/' : arr.join('/');
				const isCurrentPage = i + 1 == path?.length ? true : false;
				return (
					<BreadcrumbItem color={isCurrentPage ? 'teal' : ''}>
						<BreadcrumbLink
							textTransform='capitalize'
							isCurrentPage={isCurrentPage}
							href={isCurrentPage ? '#' : result}>
							{i == 0 ? 'home' : item}
						</BreadcrumbLink>
					</BreadcrumbItem>
				);
			})}
		</Breadcrumb>
	);
};

export default CustomBreadCrumb;
