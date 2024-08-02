'use client';
import { useCall, usePalette } from '@/hooks';
import { CallAvatarProps } from '@/interfaces';
import { Avatar, Box } from '@mui/material';

export const CallAvatar = ({ url }: CallAvatarProps) => {
	const palette = usePalette();
	const { listening } = useCall();

	return (
		<Box
			width="150px"
			maxWidth="30%"
			sx={{
				aspectRatio: '1/1',
			}}
		>
			<Avatar
				src={url}
				sx={{
					width: '100%',
					height: '100%',
					border: listening ? `solid 5px ${palette.primary.main}` : 'none',
					boxSizing: 'border-box',
				}}
			/>
		</Box>
	);
};
