'use client';
import { useBreakPoint, useCharacter, useLayout, usePalette } from '@/hooks';
import { Box, List } from '@mui/material';
import {
	MainLeftBarListItem,
	MainLeftBarListSkeleton,
	MainLeftBarSelection,
} from '../atom';

export const MainLeftBar = () => {
	const breakpoint = useBreakPoint();
	const palette = usePalette();
	const { characters } = useCharacter();
	const { isLeftBar } = useLayout();

	return (
		<>
			<Box
				position="fixed"
				top={0}
				left={0}
				display={isLeftBar ? 'block' : 'none'}
				width={['xs', 'sm'].includes(breakpoint) ? '70vw' : '350px'}
				height="100vh"
				zIndex={100}
			>
				<Box
					width="100%"
					height="100%"
					bgcolor={palette.layout.mainLayout.leftBar.bg}
				>
					<MainLeftBarSelection />
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
						{characters
							? characters.map((character, index) => (
									<MainLeftBarListItem
										key={character.speaker_uuid}
										index={index}
										uuid={character.speaker_uuid}
									/>
								))
							: Array.from({ length: 30 }, (_, index) => (
									<MainLeftBarListSkeleton key={index} />
								))}
					</List>
				</Box>
			</Box>

			<Box width="350px" height="100%" />
		</>
	);
};
