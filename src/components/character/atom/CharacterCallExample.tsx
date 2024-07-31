'use client';
import { useCall, usePalette } from '@/hooks';
import { CharacterCallExampleProps } from '@/interfaces';
import { Call } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const CharacterCallExample = ({ text }: CharacterCallExampleProps) => {
	const palette = usePalette();
	const { handleNewCallStart } = useCall();

	return (
		<Card
			onClick={() => handleNewCallStart()}
			variant="outlined"
			sx={{
				width: '200px',
				maxWidth: 'calc(50% - 15px)',
				minWidth: 'calc(33.3333% - 15px)',
				height: '150px',
				cursor: 'pointer',
				backgroundColor: 'transparent',
				borderColor: palette.success.main,
			}}
		>
			<CardHeader
				avatar={<Call color="success" />}
				sx={{
					height: '50px',
				}}
			/>
			<CardContent
				sx={{
					backgroundColor: 'transparent',
				}}
			>
				<Typography
					variant="body1"
					color={palette.success.main}
					sx={{
						wordBreak: 'break-all',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
					}}
				>
					{text}
				</Typography>
			</CardContent>
		</Card>
	);
};
