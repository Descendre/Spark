'use client';
import { usePalette } from '@/hooks';
import { Send } from '@mui/icons-material';
import { Avatar, Tooltip } from '@mui/material';

export const CallSendButton = () => {
	const palette = usePalette();

	return (
		<Tooltip title="送信" placement="top">
			<Avatar
				sx={{
					backgroundColor: palette.action.disabled,
					width: '60px',
					height: '60px',
					cursor: 'pointer',
				}}
			>
				<Send
					sx={{
						color: palette.text.primary,
					}}
				/>
			</Avatar>
		</Tooltip>
	);
};
