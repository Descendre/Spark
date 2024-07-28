'use client';
import { usePalette } from '@/hooks';
import { Box } from '@mui/material';
import { MainHeaderLogo } from '../atom';

export const MainHeader = () => {
	const palette = usePalette();

	return (
		<>
			<Box
				position="fixed"
				top={0}
				left={0}
				display="flex"
				justifyContent="start"
				alignItems="center"
				width="100%"
				height="60px"
				padding="0 20px"
				bgcolor={palette.layout.primary}
				borderBottom={`solid 1px ${palette.layout.line}`}
			>
				<MainHeaderLogo />
			</Box>

			<Box width="100%" height="60px" />
		</>
	);
};
