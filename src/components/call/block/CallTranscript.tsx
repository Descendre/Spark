'use client';
import { useBreakPoint, useCall, useLayout } from '@/hooks';
import { Typography } from '@mui/material';

export const CallTranscript = () => {
	const { isLeftBar } = useLayout();
	const breakpoint = useBreakPoint();
	const isLeftBarOpen: boolean =
		!['xs', 'sm'].includes(breakpoint) && isLeftBar;
	const { transcript } = useCall();

	return (
		<Typography
			variant="body2"
			position="fixed"
			bottom={150}
			left={isLeftBarOpen ? '350px' : 0}
			width={isLeftBarOpen ? 'calc(100% - 350px)' : '100%'}
			margin="0 auto"
			textAlign="center"
		>
			{transcript}
		</Typography>
	);
};
