'use client';
import { useBreakPoint, useCharacter, useLayout, usePalette } from '@/hooks';
import { Box, List } from '@mui/material';
import { LeftBarListItem } from '../atom';
import { LeftBarListSkeleton } from '../atom/LeftBarListSkeleton';

export const LeftBar = () => {
	const breakpoint = useBreakPoint();
	const palette = usePalette();
	const { characters } = useCharacter();
	const { isLeftBar } = useLayout();

	return (
		<>
			<Box
				display={isLeftBar ? 'block' : 'none'}
				zIndex={100}
				position="fixed"
				top="60px"
				left={0}
				width={['xs', 'sm'].includes(breakpoint) ? '100%' : '350px'}
				height="calc(100% - 60px)"
				bgcolor={palette.background.default}
				sx={{
					transition: 'width 0.5s ease',
				}}
			>
				<List
					sx={{
						width: '100%',
						height: '100%',
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
								<LeftBarListItem
									key={character.speaker_uuid}
									index={index}
									uuid={character.speaker_uuid}
								/>
							))
						: Array.from({ length: 30 }, (_, index) => (
								<LeftBarListSkeleton key={index} />
							))}
				</List>
			</Box>

			<Box
				width={
					['xs', 'sm'].includes(breakpoint) || !isLeftBar ? '0px' : '350px'
				}
				height="100%"
			/>
		</>
	);
};
