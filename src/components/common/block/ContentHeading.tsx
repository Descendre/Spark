'use client';
import { Box } from '@mui/material';
import { ContentHeadingCommands } from '../atom';

export const ContentHeading = () => {
	return (
		<Box
			position="fixed"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			height="50px"
			padding="0 30px"
		>
			<ContentHeadingCommands />
		</Box>
	);
};
