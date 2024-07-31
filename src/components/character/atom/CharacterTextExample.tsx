'use client';
import { CharacterTextExampleProps } from '@/interfaces';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const CharacterTextExample = ({
	icon,
	text,
}: CharacterTextExampleProps) => {
	return (
		<Card
			variant="outlined"
			sx={{
				width: '200px',
				maxWidth: 'calc(50% - 15px)',
				minWidth: 'calc(33.3333% - 15px)',
				height: '150px',
				cursor: 'pointer',
				backgroundColor: 'transparent',
			}}
		>
			<CardHeader
				avatar={icon}
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
