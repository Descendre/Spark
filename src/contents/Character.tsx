'use client';
import { CommonStyleHeader } from '@/components';
import { CharacterDisplay } from '@/components/character';
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
				sx={{
					overflowY: 'overlay',
					'&:not(:hover)': {
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'transparent',
						},
					},
				}}
			>
				<CharacterDisplay />
			</Box>
		</>
	);
};
