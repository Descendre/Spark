'use client';
import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		layout: {
			primary: '#000000',
		},
		background: {
			default: '#0d1318',
		},
	},
});
