'use client';
import { useCall, useChat, usePalette } from '@/hooks';
import { CharacterCallExampleProps } from '@/interfaces';
import { Call } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const CharacterCallExample = ({ text }: CharacterCallExampleProps) => {
	const palette = usePalette();
	const { isSending } = useChat();
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
				borderColor: isSending
					? palette.action.disabledBackground
					: palette.success.main,
				color: isSending
					? palette.action.disabledBackground
					: palette.text.primary,
			}}
		>
			<CardHeader
				avatar={
					<Call
						color="success"
						sx={{
							color: isSending
								? palette.action.disabledBackground
								: palette.success.main,
						}}
					/>
				}
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
					color={
						isSending ? palette.action.disabledBackground : palette.success.main
					}
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
