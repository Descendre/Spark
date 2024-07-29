import axios, { AxiosRequestConfig } from 'axios';

export const axiosFetch = {
	post: async <T>(
		url: string,
		body?: any,
		header?: { [key: string]: string }
	): Promise<T> => {
		const config: AxiosRequestConfig = {
			url,
			headers: {
				'Content-Type': 'application/json',
				...header,
			},
			method: 'POST',
			data: body,
		};
		try {
			const response = await axios(config);
			return response.data as T;
		} catch (error: any) {
			if (error.response) {
				const err: { message: string } = error.response.data;
				console.error(err);
				throw new Error(err.message);
			} else {
				throw new Error(error.message);
			}
		}
	},

	get: async <T>(
		url: string,
		header?: { [key: string]: string }
	): Promise<T> => {
		const config: AxiosRequestConfig = {
			url,
			headers: {
				'Content-Type': 'application/json',
				...header,
			},
			method: 'GET',
		};
		try {
			const response = await axios(config);
			return response.data as T;
		} catch (error: any) {
			if (error.response) {
				const err: { message: string } = error.response.data;
				console.error(err);
				throw new Error(err.message);
			} else {
				throw new Error(error.message);
			}
		}
	},

	put: async <T>(
		url: string,
		body: any,
		header?: { [key: string]: string }
	): Promise<T> => {
		const config: AxiosRequestConfig = {
			url,
			headers: {
				'Content-Type': 'application/json',
				...header,
			},
			method: 'PUT',
			data: body,
		};
		try {
			const response = await axios(config);
			return response.data as T;
		} catch (error: any) {
			if (error.response) {
				const err: { message: string } = error.response.data;
				console.error(err);
				throw new Error(err.message);
			} else {
				throw new Error(error.message);
			}
		}
	},
};
