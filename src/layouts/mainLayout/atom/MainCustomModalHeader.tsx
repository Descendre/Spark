'use client';
import { useLayout, usePalette } from '@/hooks';
import { Close } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export const MainCustomModalHeader = () => {
	const palette = usePalette();
	const { setIsCustomModal } = useLayout();

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			height="50px"
			padding="0 25px"
			bgcolor={palette.layout.mainLayout.leftBar.bg}
		>
			<Typography variant="body2" color={palette.text.secondary}>
				キャラクターカスタマイズ
			</Typography>
			<Close
				onClick={() => setIsCustomModal(false)}
				sx={{
					color: palette.error.dark,
					cursor: 'pointer',
				}}
			/>
		</Box>
	);
};
