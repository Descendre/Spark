'use client';
import { Box } from '@mui/material';
import { useBreakPoint } from '@/hooks';
import { CharacterHeadingAvatar } from '../atom';

export const CharacterHeading = () => {
	const breakpoint = useBreakPoint();

	return (
		<Box
			position="fixed"
			display="flex"
			justifyContent="end"
			alignItems="center"
			width={['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 400px)'}
			height="80px"
			padding="0 50px 0 0"
		>
			<CharacterHeadingAvatar />
		</Box>
	);
};
