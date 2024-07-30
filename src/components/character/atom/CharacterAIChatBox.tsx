'use client';
import { useCharacter, useLayout, usePalette } from '@/hooks';
import { CharacterAIChatBoxProps } from '@/interfaces';
import { findCharacterByUUID } from '@/utils';
import { Avatar, Box, Typography } from '@mui/material';

export const CharacterAIChatBox = ({
	text,
	styleName,
}: CharacterAIChatBoxProps) => {
	const { selectedCharacterUuid } = useLayout();
	const { characters, characterDetails, style } = useCharacter();
	const palette = usePalette();
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: selectedCharacterUuid || '',
	});

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			width="100%"
		>
			<Box
				display="flex"
				justifyContent="start"
				alignItems="center"
				gap="10px"
				width="100%"
				height="50px"
			>
				<Avatar
					src={
						selectedCharacterUuid
							? characterDetails[selectedCharacterUuid].style_infos[0].icon
							: ''
					}
					sx={{
						zindex: 50,
					}}
				/>
				<Typography variant="body2" color={palette.text.disabled}>
					{`${currentCharacter?.name} (${styleName})`}
				</Typography>
			</Box>
			<Typography
				width="calc(100% - 25px)"
				height="100px"
				marginLeft="auto"
				padding="10px 15px"
				sx={{
					wordBreak: 'break-all',
				}}
			>
				{text}
			</Typography>
		</Box>
	);
};
