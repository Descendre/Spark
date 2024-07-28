import { NoSelectedHeader } from '@/components';
import { Box } from '@mui/material';
import React from 'react';

export const NoSelected = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<NoSelectedHeader />
		</Box>
	);
};
