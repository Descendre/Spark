import { Box } from '@mui/material';
import { CallAvatar } from '../atom';
import { CallDisplayProps } from '@/interfaces';

export const CallDisplay = ({ url }: CallDisplayProps) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<CallAvatar url={url} />
		</Box>
	);
};
