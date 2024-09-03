'use client';
import { useCall, useCharacter, useLayout, usePalette } from '@/hooks';
import { Call, CallEnd, Settings } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const MainHeaderCommandsRight = () => {
	const { selectedContent, setIsCustomModal } = useLayout();
	const { handleNewCallStart, handleCallStart, handleCallEnd } = useCall();
	const { isCustom } = useCharacter();
	const palette = usePalette();
	const iconDisabled: boolean = !['character', 'log', 'call'].includes(
		selectedContent
	);

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="15px"
			height="100%"
		>
			<Tooltip placement="bottom" title="カスタマイズ">
				<span>
					<Settings
						onClick={() => setIsCustomModal((prev) => !prev)}
						sx={{
							cursor: 'pointer',
							color: isCustom ? palette.primary.main : palette.text.primary,
						}}
					/>
				</span>
			</Tooltip>

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
									if (selectedContent === 'character') {
										handleNewCallStart();
									} else if (selectedContent === 'log') {
										handleCallStart();
									}
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
