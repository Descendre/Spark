'use client';
import { usePalette } from '@/hooks';
import { LogUserChatBoxProps } from '@/interfaces';
import { Box, Typography } from '@mui/material';

export const LogUserChatBox = ({ text }: LogUserChatBoxProps) => {
	const palette = usePalette();

	return (
		<Box display="flex" justifyContent="end" alignItems="center" width="100%">
			{text && (
				<Typography
					maxWidth="70%"
					padding="10px 25px"
					borderRadius="20px"
					bgcolor={palette.content.character.userChatBox.bg}
					sx={{
						wordBreak: 'break-all',
						whiteSpace: 'pre-wrap',
					}}
				>
					{text}
				</Typography>
			)}
		</Box>
	);
};
