import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import React, { useEffect, useState } from 'react';
import { TOKEN_NAME } from './lib/constants';

type UseAuthReturn = {
	loading: boolean;
	isLoggedIn: boolean | undefined;
	token: string;
};

export const useAuth = (): UseAuthReturn => {
	const [loading, setLoading] = useState<boolean>(true);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);
	const [authToken, setAuthToken] = useState<string>('');

	useEffect(() => {
		if (typeof window == 'undefined') return;
		const storedToken = localStorage.getItem(TOKEN_NAME);
		const token = storedToken ? storedToken : null;

		if (token != null) {
			setAuthToken(() => token);
			setIsLoggedIn(() => true);
		} else {
			setIsLoggedIn(() => false);
		}
		setLoading(() => false);
	}, []);

	return { loading, isLoggedIn, token: authToken };
};
