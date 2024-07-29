'use client';
import { useLayout } from '@/hooks';
import { MenuOpen, RecordVoiceOver, Restore } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const MainLeftDrawerSelection = () => {
	const { setIsLeftDrawer, isLogSelect, setIsLogSelect } = useLayout();

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
			{!isLogSelect ? (
				<Tooltip title="チャットログ" placement="bottom">
					<span>
						<Restore
							sx={{
								cursor: 'pointer',
							}}
							onClick={() => setIsLogSelect(true)}
						/>
					</span>
				</Tooltip>
			) : (
				<Tooltip title="キャラクター" placement="bottom">
					<span>
						<RecordVoiceOver
							sx={{
								cursor: 'pointer',
							}}
							onClick={() => setIsLogSelect(false)}
						/>
					</span>
				</Tooltip>
			)}
		</Box>
	);
};
