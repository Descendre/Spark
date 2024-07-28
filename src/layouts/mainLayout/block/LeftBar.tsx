'use client';
import { useBreakPoint, useCharacter, usePalette } from '@/hooks';
import { Box, List } from '@mui/material';
import { LeftBarListItem } from '../atom';

export const LeftBar = () => {
	const breakpoint = useBreakPoint();
	const palette = usePalette();
	const { characters } = useCharacter();

	return (
		<>
			<Box
				zIndex={100}
				position="fixed"
				top="60px"
				left={0}
				width={['xs', 'sm'].includes(breakpoint) ? '100%' : '350px'}
				height="calc(100% - 60px)"
				bgcolor={palette.background.default}
			>
				<List
					sx={{
						width: '100%',
						height: '100%',
						padding: '10px',
						overflowY: 'overlay',
						'&:not(:hover)': {
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: 'transparent',
							},
						},
					}}
				>
					{characters?.map((character, index) => (
						<LeftBarListItem
							key={character.speaker_uuid}
							index={index}
							uuid={character.speaker_uuid}
						/>
					))}
				</List>
			</Box>

			<Box
				width={['xs'].includes(breakpoint) ? '0px' : '350px'}
				height="100%"
			/>
		</>
	);
};
