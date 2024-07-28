'use client';

import { Character, NoSelected } from '@/contents';
import { useLayout } from '@/hooks';
import { Box } from '@mui/material';

export const MainView = () => {
	const { selectedContent } = useLayout();

	return (
		<Box width="100%" maxWidth="1000px" margin="0 auto" height="100%">
			{selectedContent === 'character' ? <Character /> : <NoSelected />}
		</Box>
	);
};
