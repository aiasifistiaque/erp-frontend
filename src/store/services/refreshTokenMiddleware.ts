import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';
import { logout, refresh } from '../slices/authSlice';
import apiService from './apiService';

const refreshTokenMiddleware: Middleware = (api: any) => next => async action => {
	if (isRejectedWithValue(action)) {
		if (isTokenExpiredError(action.payload) == true) {
			const { dispatch } = api;
			const refreshTokenResult = await dispatch(apiService.endpoints.refreshToken.initiate({}));

			if (refreshTokenResult?.data?.status === 'success') {
				dispatch(refresh(refreshTokenResult?.data?.token));

				window.location.reload();
			} else {
				dispatch(logout());
			}
		}
	} else {
		return next(action);
	}
};

const isTokenExpiredError = (error: any) => {
	if (error?.data?.message === 'Token Failed' && error?.status === 403) return true;
	else return false;
};

export default refreshTokenMiddleware;
