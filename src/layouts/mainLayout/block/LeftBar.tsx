'use client';
import { useBreakPoint } from '@/hooks';
import { Box } from '@mui/material';

export const LeftBar = () => {
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				position="fixed"
				top="60px"
				left={0}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width={['xs'].includes(breakpoint) ? '100%' : '300px'}
				height="100%"
				bgcolor="#222"
				sx={{
					opacity: 0.7,
				}}
			></Box>

			<Box
				width={['xs'].includes(breakpoint) ? '0px' : '300px'}
				height="100%"
			/>
		</>
	);
};
