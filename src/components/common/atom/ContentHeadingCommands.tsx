'use client';
import { useLayout } from '@/hooks';
import { FormatListBulleted } from '@mui/icons-material';
import { Box } from '@mui/material';

export const ContentHeadingCommands = () => {
	const { setIsLeftBar } = useLayout();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			height="100%"
		>
			<FormatListBulleted
				fontSize="small"
				sx={{
					cursor: 'pointer',
				}}
				onClick={() => setIsLeftBar((prev) => !prev)}
			/>
		</Box>
	);
};
