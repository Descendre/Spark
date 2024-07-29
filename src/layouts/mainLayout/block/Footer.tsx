'use client';
import { Box } from '@mui/material';
import { FooterInputBar } from '../atom';
import { useBreakPoint, useLayout } from '@/hooks';

export const Footer = () => {
	const { isLeftBar } = useLayout();
	const breakpoint = useBreakPoint();

	return (
		<Box
			position="fixed"
			bottom={0}
			left={['xs', 'sm'].includes(breakpoint) || !isLeftBar ? 0 : '350px'}
			display="flex"
			justifyContent="center"
			alignItems="center"
			width={
				['xs', 'sm'].includes(breakpoint) || !isLeftBar
					? '100%'
					: 'calc(100% - 350px)'
			}
			height="100px"
		>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="end"
				width="100%"
				height="100%"
				maxWidth="1000px"
				marginBottom="40px"
			>
				<FooterInputBar />
			</Box>
		</Box>
	);
};
