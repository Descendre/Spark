'use client';
import { Box } from '@mui/material';
import { FooterInputBar } from '../atom';
import { useBreakPoint } from '@/hooks';

export const Footer = () => {
	const breakpoint = useBreakPoint();

	return (
		<Box
			position="fixed"
			bottom={0}
			display="flex"
			justifyContent="center"
			alignItems="center"
			width={['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 400px)'}
			height="100px"
		>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="end"
				width="100%"
				height="100%"
				marginBottom="40px"
			>
				<FooterInputBar />
			</Box>
		</Box>
	);
};
