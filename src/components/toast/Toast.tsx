import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

type ToastProps = {
	isError?: boolean;
	isSuccess?: boolean;
	error?: any;
	successText?: string;
	successTitle?: string;
};

const Toast: React.FC<ToastProps> = ({ isError, isSuccess, error, successText, successTitle }) => {
	const toast = useToast();

	useEffect(() => {
		isError &&
			toast({
				title: 'Error',
				description: error && error?.data?.message,
				status: 'error',
				duration: 9000,
				isClosable: true,
			});
	}, [isError]);

	useEffect(() => {
		isSuccess &&
			toast({
				title: successTitle || 'Success',
				description: successText || 'success',
				status: 'success',
				duration: 9000,
				isClosable: true,
			});
	}, [isSuccess]);

	return null;
};

export default Toast;
