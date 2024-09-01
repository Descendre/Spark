'use client';
import { MainLayoutProps } from '@/interfaces';
import {
	MainCustomModal,
	MainFooter,
	MainHeader,
	MainLeftBar,
	MainLeftDrawer,
} from './block';
import { Box } from '@mui/material';
import { useBreakPoint, useLayout } from '@/hooks';

export const MainLayout = ({ children }: MainLayoutProps) => {
	const { isLeftBar, selectedContent } = useLayout();
	const breakpoint = useBreakPoint();
	const isLeftBarOpen: boolean =
		!['xs', 'sm'].includes(breakpoint) && isLeftBar;

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
					overflow: 'hidden',
				}}
			>
				<MainHeader />
				<Box display="flex" width="100%" height="calc(100% - 60px)">
					{isLeftBarOpen && <MainLeftBar />}
					<Box
						zIndex={50}
						width={isLeftBarOpen ? 'calc(100% - 350px)' : '100%'}
						height={selectedContent !== 'call' ? 'calc(100% - 100px)' : '100%'}
					>
						{children}
						{selectedContent !== 'call' && <MainFooter />}
					</Box>
				</Box>
			</Box>

			{['xs', 'sm'].includes(breakpoint) && <MainLeftDrawer />}
			<MainCustomModal />
		</>
	);
};
