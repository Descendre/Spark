'use client';
import { useCall, usePalette } from '@/hooks';
import { Call } from '@mui/icons-material';
import { Avatar, Tooltip } from '@mui/material';

export const CallButton = () => {
	const { handleCallEnd } = useCall();
	const palette = usePalette();

	return (
		<Tooltip title="通話を終了" placement="top">
			<Avatar
				onClick={() => handleCallEnd()}
				sx={{
					backgroundColor: palette.error.main,
					width: '60px',
					height: '60px',
					cursor: 'pointer',
				}}
			>
				<Call
					sx={{
						color: palette.text.primary,
					}}
				/>
			</Avatar>
		</Tooltip>
	);
};
