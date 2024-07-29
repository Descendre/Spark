'use client';
import { useLayout } from '@/hooks';
import { FormatListBulleted } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const MainHeaderCommands = () => {
	const { setIsLeftBar } = useLayout();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			height="100%"
		>
			<Tooltip title="サイドバーを開く" placement="bottom">
				<FormatListBulleted
					sx={{
						cursor: 'pointer',
					}}
					onClick={() => setIsLeftBar(true)}
				/>
			</Tooltip>
		</Box>
	);
};
