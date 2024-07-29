'use client';
import { MainLayoutProps } from '@/interfaces';
import { Footer, LeftBar, MainHeader } from './block';
import { Box } from '@mui/material';
import { useBreakPoint, useLayout } from '@/hooks';

export const MainLayout = ({ children }: MainLayoutProps) => {
	const { isLeftBar } = useLayout();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'start',
					height: '100vh',
					width: '100%',
					overflowX: 'hidden',
				}}
			>
				<MainHeader />
				<Box display="flex" width="100%" height="calc(100% - 60px)">
					<LeftBar />
					<Box
						zIndex={50}
						width={
							['xs', 'sm'].includes(breakpoint) || !isLeftBar
								? '100%'
								: 'calc(100% - 350px)'
						}
						height="calc(100% - 100px)"
						sx={{
							overflowY: 'overlay',
							'&:not(:hover)': {
								'&::-webkit-scrollbar-thumb': {
									backgroundColor: 'transparent',
								},
							},
						}}
					>
						{children}
						<Footer />
					</Box>
				</Box>
			</Box>
		</>
	);
};
