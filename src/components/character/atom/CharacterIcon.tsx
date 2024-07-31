'use client';
import { usePalette } from '@/hooks';
import { CharacterIconProps } from '@/interfaces';
import { Avatar, Box, Typography } from '@mui/material';

export const CharacterIcon = ({ url, name }: CharacterIconProps) => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			gap="20px"
		>
			<Avatar
				src={url}
				sx={{
					width: '100px',
					height: '100px',
				}}
			/>
			<Typography variant="body1" color={palette.text.disabled}>
				{name}
			</Typography>
		</Box>
	);
};
