'use client';
import { useBreakPoint, useCharacter, useLayout, usePalette } from '@/hooks';
import { Box, Drawer, List } from '@mui/material';
import {
	MainLeftBarListItem,
	MainLeftBarListSkeleton,
	MainLeftDrawerSelection,
} from '../atom';
import { useEffect } from 'react';

export const MainLeftDrawer = () => {
	const breakpoint = useBreakPoint();
	const palette = usePalette();
	const { characters } = useCharacter();
	const { isLeftDrawer, setIsLeftDrawer, isLogSelect } = useLayout();

	useEffect(() => {
		return () => {
			setIsLeftDrawer(false);
		};
	}, [setIsLeftDrawer]);

	return (
		<Drawer
			anchor="left"
			open={isLeftDrawer}
			onClose={() => setIsLeftDrawer(false)}
			sx={{
				zIndex: 100,
			}}
		>
			<Box
				width="100%"
				height="100%"
				bgcolor={palette.layout.mainLayout.leftDrawer.bg}
			>
				<MainLeftDrawerSelection />
				<List
					sx={{
						width: ['xs', 'sm'].includes(breakpoint) ? '70vw' : '350px',
						height: 'calc(100% - 60px)',
						padding: '10px',
						overflowY: characters ? 'overlay' : 'hidden',
						'&:not(:hover)': {
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: 'transparent',
							},
						},
					}}
				>
					{isLogSelect ? (
						<Box />
					) : characters ? (
						characters.map((character, index) => (
							<MainLeftBarListItem
								key={character.speaker_uuid}
								index={index}
								uuid={character.speaker_uuid}
							/>
						))
					) : (
						Array.from({ length: 30 }, (_, index) => (
							<MainLeftBarListSkeleton key={index} />
						))
					)}
				</List>
			</Box>
		</Drawer>
	);
};
