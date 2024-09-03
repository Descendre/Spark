'use client';
import { Box } from '@mui/material';
import { MainCustomModalTextArea } from './MainCustomModalTextArea';

export const MainCustomModalBody = () => {
	return (
		<Box
			display="flex"
			justifyContent="start"
			alignItems="center"
			flexDirection="column"
			gap="25px"
			width="100%"
			height="calc(100% - 50px)"
			padding="100px 50px 0 50px"
			sx={{
				overflowY: 'overlay',
			}}
		>
			<MainCustomModalTextArea />
		</Box>
	);
};
