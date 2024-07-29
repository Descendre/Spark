'use client';
import { Character, NoSelected } from '@/contents';
import { useLayout, usePalette } from '@/hooks';
import { Box } from '@mui/material';

export const MainView = () => {
	const { selectedContent } = useLayout();
	const palette = usePalette();

	return (
		<Box
			position="relative"
			width="100%"
			margin="0 auto"
			height="100%"
			bgcolor={palette.background.default}
		>
			{selectedContent === 'character' ? <Character /> : <NoSelected />}
		</Box>
	);
};
