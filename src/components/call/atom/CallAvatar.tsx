'use client';
import { CallAvatarProps } from '@/interfaces';
import { Avatar, Box } from '@mui/material';

export const CallAvatar = ({ url }: CallAvatarProps) => {
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
				}}
			/>
		</Box>
	);
};
