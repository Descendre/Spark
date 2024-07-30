import { Avatar, Box } from '@mui/material';
import React from 'react';

export const MainHeaderLogo = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%"
		>
			<Avatar
				src={'/Spark_logo_transparent.svg'}
				variant="square"
				sx={{
					width: 'auto',
				}}
			/>
		</Box>
	);
};
