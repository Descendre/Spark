'use client';
import { useLayout } from '@/hooks';
import {
	FormatListBulleted,
	RecordVoiceOver,
	Restore,
} from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const MainLeftBarSelection = () => {
	const { setIsLeftBar, isLogSelect, setIsLogSelect } = useLayout();

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
