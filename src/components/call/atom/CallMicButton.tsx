'use client';
import { useCall, useChat, usePalette } from '@/hooks';
import { Mic, MicOff } from '@mui/icons-material';
import { Avatar, Tooltip } from '@mui/material';

export const CallMicButton = () => {
	const { isSending } = useChat();
	const { listening, handleCallPlay } = useCall();
	const palette = usePalette();

	return (
		<>
			{listening && !isSending ? (
				<Tooltip title="マイク起動中" placement="top">
					<Avatar
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
						onClick={async () => {
							if (!isSending) {
								await handleCallPlay();
							}
						}}
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
