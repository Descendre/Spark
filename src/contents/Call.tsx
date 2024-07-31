'use client';
import { CallDisplay, CommonStyleHeader } from '@/components';
import { useCharacter, useChat, usePalette } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';

export const Call = () => {
	const palette = usePalette();
	const { handleGetSpeakerUuidBySelectedItem } = useChat();
	const speakerUuid: string | undefined = handleGetSpeakerUuidBySelectedItem();
	const { characterDetails } = useCharacter();

	return (
		<>
			<CommonStyleHeader speakerUuid={speakerUuid || ''} />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="100%"
				bgcolor={palette.content.call.bg}
			>
				<CallDisplay
					url={characterDetails[speakerUuid || '']?.style_infos[0].icon}
				/>
			</Box>
		</>
	);
};
