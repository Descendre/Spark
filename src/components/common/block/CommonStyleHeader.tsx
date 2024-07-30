'use client';
import { useBreakPoint, useCharacter, useChat, useLayout } from '@/hooks';
import { findCharacterByUUID } from '@/utils';
import { Box } from '@mui/material';
import { CommonStyleHeaderChip } from '../atom';
import { CommonStyleHeaderProps } from '@/interfaces';

export const CommonStyleHeader = ({ speakerUuid }: CommonStyleHeaderProps) => {
	const { isLeftBar, selectedItem } = useLayout();
	const { characters, characterDetails } = useCharacter();
	const breakpoint = useBreakPoint();
	const isLeftBarOpen: boolean =
		!['xs', 'sm'].includes(breakpoint) && isLeftBar;
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: speakerUuid,
	});

	return (
		<Box
			zIndex={100}
			position="fixed"
			left={isLeftBarOpen ? '350px' : 0}
			display="flex"
			justifyContent="start"
			alignItems="center"
			gap="15px"
			padding="0 15px"
			width={isLeftBarOpen ? 'calc(100% - 350px - 10px)' : 'calc(100% - 10px)'}
			height="40px"
			sx={{
				overflowX: 'scroll',
				backdropFilter: 'blur(10px)',
				'&::-webkit-scrollbar': {
					width: '0px',
					height: '0px',
				},
			}}
		>
			{currentCharacter &&
				selectedItem &&
				currentCharacter.styles.map((style, index) => (
					<CommonStyleHeaderChip
						key={style.id}
						url={characterDetails[speakerUuid]?.style_infos[0].icon}
						label={style.name}
						id={style.id}
						index={index}
						speakerUuid={speakerUuid}
					/>
				))}
		</Box>
	);
};
