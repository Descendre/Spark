'use client';
import { useLayout } from '@/hooks';
import { MenuOpen } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const MainLeftDrawerSelection = () => {
	const { setIsLeftDrawer } = useLayout();

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
			<Tooltip title="メニューを閉じる" placement="bottom">
				<MenuOpen
					sx={{
						cursor: 'pointer',
					}}
					onClick={() => setIsLeftDrawer(false)}
				/>
			</Tooltip>
		</Box>
	);
};
