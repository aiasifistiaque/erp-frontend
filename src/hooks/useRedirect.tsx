import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type RedirectProps = {
	isSuccess: boolean;
	redirect: string;
	isLoading: boolean;
};

const useRedirect: React.FC<RedirectProps> = ({ isSuccess, redirect, isLoading }) => {
	const router = useRouter();
	useEffect(() => {
		if (!isLoading) {
			if (isSuccess) {
				router.replace(redirect);
			}
		}
	}, [isLoading]);
	return null;
};

export default useRedirect;
