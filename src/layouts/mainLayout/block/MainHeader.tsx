'use client';
import { useBreakPoint, useLayout, usePalette } from '@/hooks';
import { Box, Tooltip } from '@mui/material';
import { MainHeaderCommands, MainHeaderLogo } from '../atom';
import { MenuOpen } from '@mui/icons-material';

export const MainHeader = () => {
	const { isLeftBar, setIsLeftDrawer } = useLayout();
	const breakpoint = useBreakPoint();
	const palette = usePalette();
	const isLeftBarOpen: boolean =
		!['xs', 'sm'].includes(breakpoint) && isLeftBar;

	return (
		<>
			<Box
				position="fixed"
				left={isLeftBarOpen ? '350px' : 0}
				display="flex"
				justifyContent={
					['xs', 'sm'].includes(breakpoint) ? 'space-around' : 'space-between'
				}
				alignItems="center"
				width={isLeftBarOpen ? 'calc(100% - 350px)' : '100%'}
				height="60px"
				padding="0 20px"
				bgcolor={palette.layout.mainLayout.header}
			>
				{['xs', 'sm'].includes(breakpoint) ? (
					<>
						<Box
							display="flex"
							justifyContent="start"
							alignItems="center"
							width="50px"
							height="100%"
						>
							<Tooltip title="メニューを開く" placement="bottom">
								<MenuOpen
									sx={{
										cursor: 'pointer',
									}}
									onClick={() => setIsLeftDrawer(true)}
								/>
							</Tooltip>
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							flexGrow={1}
							height="100%"
						>
							<MainHeaderLogo />
						</Box>
						<Box
							display="flex"
							justifyContent="end"
							alignItems="center"
							width="50px"
							height="100%"
						></Box>
					</>
				) : (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						gap="15px"
					>
						{!isLeftBar && <MainHeaderCommands />}
						<MainHeaderLogo />
					</Box>
				)}
			</Box>

			<Box width="100%" height="60px" />
		</>
	);
};
