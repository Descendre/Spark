'use client';
import { usePalette } from '@/hooks';
import { Box } from '@mui/material';

export const MainHeader = () => {
	const palette = usePalette();

	return (
		<>
			<Box
				position="fixed"
				top={0}
				left={0}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="60px"
				padding="10px 0"
				bgcolor={palette.layout.primary}
				borderBottom={`solid 1px ${palette.layout.line}`}
			></Box>

			<Box width="100%" height="60px" />
		</>
	);
};
