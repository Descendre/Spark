'use client';
import { MainLayoutProps } from '@/interfaces';
import { LeftBar, MainHeader } from './block';
import { Box } from '@mui/material';
import { useBreakPoint } from '@/hooks';

export const MainLayout = ({ children }: MainLayoutProps) => {
	const breakpoint = useBreakPoint();

	return (
		<>
			<MainHeader />
			<Box display="flex" width="100%" height="calc(100% - 60px)">
				<LeftBar />
				<Box
					width={['xs'].includes(breakpoint) ? '100%' : 'calc(100% - 400px)'}
					height="100%"
				>
					{children}
				</Box>
			</Box>
		</>
	);
};
