'use client';
import { useCharacter, useChat, useLayout, usePalette } from '@/hooks';
import { findCharacterByUUID } from '@/utils';
import { Box, Typography } from '@mui/material';

export const MainFooterCredit = () => {
	const palette = usePalette();
	const { handleGetSpeakerUuidBySelectedItem } = useChat();
	const { selectedContent, selectedItem } = useLayout();
	const { characters } = useCharacter();
	const speakerUuid: string | undefined = handleGetSpeakerUuidBySelectedItem();
	const uuid =
		selectedContent === 'character'
			? selectedItem
			: selectedContent === 'log'
				? speakerUuid
				: undefined;
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: uuid || '',
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
