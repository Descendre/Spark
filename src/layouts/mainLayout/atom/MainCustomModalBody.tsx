'use client';
import { Box } from '@mui/material';
import { MainCustomModalTextArea } from './MainCustomModalTextArea';
import { useBreakPoint } from '@/hooks';

export const MainCustomModalBody = () => {
	const breakpoint = useBreakPoint();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems={['xs', 'sm'].includes(breakpoint) ? 'center' : 'end'}
			flexDirection="column"
			gap="25px"
			width="100%"
			height="calc(100% - 50px)"
			padding="0 50px"
			sx={{
				overflowY: 'overlay',
			}}
		>
			<MainCustomModalTextArea />
		</Box>
	);
};
