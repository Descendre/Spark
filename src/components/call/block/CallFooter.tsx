'use client';
import { useBreakPoint, useLayout } from '@/hooks';
import { Box } from '@mui/material';
import { CallButton, CallMicButton, CallSendButton } from '../atom';

export const CallFooter = () => {
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
			gap="20px"
			width={isLeftBarOpen ? 'calc(100% - 350px)' : '100%'}
			height="100px"
		>
			<CallButton />
			<CallMicButton />
			<CallSendButton />
		</Box>
	);
};
