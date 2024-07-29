'use client';
import { useLayout } from '@/hooks';
import { FormatListBulleted } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const MainLeftBarSelection = () => {
	const { setIsLeftBar } = useLayout();

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			gap="15px"
			width="100%"
			height="60px"
			padding="0 20px"
		>
			<Tooltip title="サイドバーを閉じる" placement="bottom">
				<FormatListBulleted
					sx={{
						cursor: 'pointer',
					}}
					onClick={() => setIsLeftBar(false)}
				/>
			</Tooltip>
		</Box>
	);
};
