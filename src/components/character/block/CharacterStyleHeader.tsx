'use client';
import { useBreakPoint, useCharacter, useLayout } from '@/hooks';
import { findCharacterByUUID } from '@/utils';
import { Box } from '@mui/material';
import { CharacterStyleHeaderChip } from '../atom';

export const CharacterStyleHeader = () => {
	const { selectedCharacterUuid, isLeftBar } = useLayout();
	const { characters, characterDetails } = useCharacter();
	const breakpoint = useBreakPoint();
	const isLeftBarOpen: boolean =
		!['xs', 'sm'].includes(breakpoint) && isLeftBar;
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: selectedCharacterUuid,
	});

	return (
		<Box
			position="fixed"
			left={isLeftBarOpen ? '350px' : 0}
			display="flex"
			justifyContent="start"
			alignItems="center"
			gap="15px"
			padding="0 15px"
			width={isLeftBarOpen ? 'calc(100% - 350px)' : '100%'}
			height="40px"
			sx={{
				overflowX: 'scroll',
				'&::-webkit-scrollbar': {
					width: '0px',
					height: '0px',
				},
			}}
		>
			{currentCharacter &&
				selectedCharacterUuid &&
				currentCharacter.styles.map((style, index) => (
					<CharacterStyleHeaderChip
						key={style.id}
						url={characterDetails[selectedCharacterUuid]?.style_infos[0].icon}
						label={style.name}
						id={style.id}
						index={index}
					/>
				))}
		</Box>
	);
};
