'use client';
import { useCharacter, usePalette } from '@/hooks';
import { LogAIChatBoxProps } from '@/interfaces';
import { findCharacterByUUID } from '@/utils';
import { Avatar, Box, Skeleton, Typography } from '@mui/material';

export const LogAIChatBox = ({
	text,
	styleId,
	speakerUuid,
}: LogAIChatBoxProps) => {
	const { characters, characterDetails } = useCharacter();
	const palette = usePalette();
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: speakerUuid || '',
	});
	const styleName = currentCharacter?.styles.find(
		(style) => style.id === styleId
	)?.name;

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
				{speakerUuid ? (
					<Avatar
						src={characterDetails[speakerUuid]?.style_infos[0].icon}
						sx={{
							zindex: 50,
						}}
					/>
				) : (
					<Skeleton variant="circular" />
				)}
				<Typography variant="body2" color={palette.text.disabled}>
					{`${currentCharacter ? currentCharacter.name : ''} (${styleName || ''})`}
				</Typography>
			</Box>
			<Typography
				width="calc(100% - 25px)"
				height="100px"
				marginLeft="auto"
				padding="10px 15px"
				sx={{
					wordBreak: 'break-all',
					whiteSpace: 'pre-wrap',
				}}
			>
				{text}
			</Typography>
		</Box>
	);
};
