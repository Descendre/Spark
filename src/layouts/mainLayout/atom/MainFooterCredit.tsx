'use client';
import { useCharacter, useLayout, usePalette } from '@/hooks';
import { findCharacterByUUID } from '@/utils';
import { Box, Typography } from '@mui/material';

export const MainFooterCredit = () => {
	const palette = usePalette();
	const { selectedItem } = useLayout();
	const { characters } = useCharacter();
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: selectedItem || '',
	});

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="90%"
			height="30px"
			maxWidth="1000px"
			margin="0 auto"
		>
			<Typography
				variant="body2"
				color={palette.text.disabled}
				width="100%"
				textAlign="end"
				fontSize="0.8rem"
			>
				{`Material UI (MUI)　` +
					(currentCharacter ? `VOICEVOX:${currentCharacter?.name}` : '')}
			</Typography>
		</Box>
	);
};
