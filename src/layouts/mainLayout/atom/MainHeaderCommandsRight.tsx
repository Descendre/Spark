'use client';
import { useCall, useLayout, usePalette } from '@/hooks';
import { Call, CallEnd } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const MainHeaderCommandsRight = () => {
	const { selectedContent, setSelectedContent } = useLayout();
	const { handleCallEnd } = useCall();
	const palette = usePalette();
	const iconDisabled: boolean = !['character', 'log', 'call'].includes(
		selectedContent
	);

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			height="100%"
		>
			{selectedContent === 'call' ? (
				<Tooltip title="通話を終了" placement="bottom">
					<span>
						<CallEnd
							onClick={() => {
								if (!iconDisabled) {
									handleCallEnd();
								}
							}}
							sx={{
								userSelect: iconDisabled ? 'none' : 'auto',
								cursor: iconDisabled ? 'auto' : 'pointer',
								color: iconDisabled
									? palette.text.disabled
									: palette.text.primary,
							}}
						/>
					</span>
				</Tooltip>
			) : (
				<Tooltip title="通話を開始" placement="bottom">
					<span>
						<Call
							onClick={() => {
								if (!iconDisabled) {
									setSelectedContent('call');
								}
							}}
							sx={{
								userSelect: iconDisabled ? 'none' : 'none',
								cursor: iconDisabled ? 'auto' : 'pointer',
								color: iconDisabled
									? palette.text.disabled
									: palette.text.primary,
							}}
						/>
					</span>
				</Tooltip>
			)}
		</Box>
	);
};
