'use client';
import { useCall, usePalette } from '@/hooks';
import { Mic, MicOff } from '@mui/icons-material';
import { Avatar, Tooltip } from '@mui/material';

export const CallMicButton = () => {
	const { listening, handleCallPlay, handleCallPause } = useCall();
	const palette = usePalette();

	return (
		<>
			{listening ? (
				<Tooltip title="マイクをオフ" placement="top">
					<Avatar
						onClick={() => handleCallPause()}
						sx={{
							backgroundColor: palette.action.disabled,
							width: '60px',
							height: '60px',
							cursor: 'pointer',
						}}
					>
						<Mic
							sx={{
								color: palette.text.primary,
							}}
						/>
					</Avatar>
				</Tooltip>
			) : (
				<Tooltip title="マイクをオン" placement="top">
					<Avatar
						onClick={() => handleCallPlay()}
						sx={{
							backgroundColor: palette.action.disabled,
							width: '60px',
							height: '60px',
							cursor: 'pointer',
						}}
					>
						<MicOff
							sx={{
								color: palette.text.primary,
							}}
						/>
					</Avatar>
				</Tooltip>
			)}
		</>
	);
};
