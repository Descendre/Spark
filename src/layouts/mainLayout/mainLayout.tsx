import { MainLayoutProps } from '@/interfaces';
import { LeftBar, MainHeader } from './block';
import { Box } from '@mui/material';

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<MainHeader />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="calc(100vh - 60px)"
				bgcolor="#add"
			>
				<LeftBar />
				<Box width="calc(100% - 250px)" height="100%">
					{children}
				</Box>
			</Box>
		</>
	);
};
