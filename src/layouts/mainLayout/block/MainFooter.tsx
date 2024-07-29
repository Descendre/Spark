'use client';
import { Box } from '@mui/material';
import { useBreakPoint, useLayout } from '@/hooks';
import { MainFooterInputBar } from '../atom';

export const MainFooter = () => {
	const { isLeftBar } = useLayout();
	const breakpoint = useBreakPoint();
	const isLeftBarOpen: boolean =
		!['xs', 'sm'].includes(breakpoint) && isLeftBar;

	return (
		<Box
			position="fixed"
			bottom={0}
			left={isLeftBarOpen ? '350px' : 0}
			display="flex"
			justifyContent="center"
			alignItems="center"
			width={isLeftBarOpen ? 'calc(100% - 350px)' : '100%'}
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
				<MainFooterInputBar />
			</Box>
		</Box>
	);
};
