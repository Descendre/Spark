'use client';
import { useLayout, usePalette } from '@/hooks';
import { Call } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';

export const MainHeaderCommandsRight = () => {
	const { selectedContent } = useLayout();
	const palette = usePalette();
	const iconDisabled: boolean = selectedContent !== 'character';

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			height="100%"
		>
			<Tooltip title="通話を開始" placement="bottom">
				<span>
					<IconButton
						disableRipple
						disabled={iconDisabled}
						sx={{
							backgroundColor: palette.layout.mainLayout.header.callStart,
							'&:hover': {
								backgroundColor: palette.layout.mainLayout.header.callStart,
							},
							'&.Mui-disabled': {
								backgroundColor: palette.layout.mainLayout.header.disabled,
							},
						}}
					>
						<Call
							sx={{
								cursor: 'pointer',
								color: iconDisabled
									? palette.text.disabled
									: palette.text.primary,
							}}
						/>
					</IconButton>
				</span>
			</Tooltip>
		</Box>
	);
};
