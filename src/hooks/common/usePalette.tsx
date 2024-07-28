'use client';
import { useTheme } from '@mui/material';

export const usePalette = () => {
	const theme = useTheme();
	const palette = theme.palette;

	return palette;
};
