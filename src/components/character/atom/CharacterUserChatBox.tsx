'use client';
import { usePalette } from '@/hooks';
import { CharacterUserChatBoxProps } from '@/interfaces';
import { Box, Typography } from '@mui/material';

export const CharacterUserChatBox = ({ text }: CharacterUserChatBoxProps) => {
	const palette = usePalette();

	return (
		<Box display="flex" justifyContent="end" alignItems="center" width="100%">
			<Typography
				maxWidth="70%"
				height="100px"
				padding="10px 25px"
				borderRadius="20px"
				bgcolor={palette.content.character.userChatBox.bg}
				sx={{
					wordBreak: 'break-all',
				}}
			>
				{text}
			</Typography>
		</Box>
	);
};
