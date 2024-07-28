'use client';

import { Character, NoSelected } from '@/contents';
import { useLayout, usePalette } from '@/hooks';
import { Box } from '@mui/material';

export const MainView = () => {
	const { selectedContent } = useLayout();
	const palette = usePalette();

	return (
		<Box
			width="100%"
			maxWidth="1000px"
			margin="0 auto"
			height="100%"
			bgcolor={palette.background.default}
		>
			{selectedContent === 'character' ? <Character /> : <NoSelected />}
		</Box>
	);
};
