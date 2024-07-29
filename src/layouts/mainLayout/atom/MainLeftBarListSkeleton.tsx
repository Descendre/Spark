import { Skeleton } from '@mui/material';

export const MainLeftBarListSkeleton = () => {
	return (
		<Skeleton
			width="100%"
			height={70}
			sx={{
				cursor: 'pointer',
				borderRadius: '10px',
			}}
		/>
	);
};
