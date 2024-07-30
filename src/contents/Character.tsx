'use client';
import { CharacterChatArea, CommonStyleHeader } from '@/components';
import { useLayout } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';

export const Character = () => {
	const { selectedItem } = useLayout();

	return (
		<>
			<CommonStyleHeader speakerUuid={selectedItem || ''} />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="start"
				width="100%"
				height="100%"
			>
				<CharacterChatArea />
			</Box>
		</>
	);
};
