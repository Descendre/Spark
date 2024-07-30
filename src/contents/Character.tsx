import { CharacterChatArea, CharacterStyleHeader } from '@/components';
import { Box } from '@mui/material';
import React from 'react';

export const Character = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="start"
			width="100%"
			height="100%"
		>
			<CharacterStyleHeader />
			<CharacterChatArea />
		</Box>
	);
};
