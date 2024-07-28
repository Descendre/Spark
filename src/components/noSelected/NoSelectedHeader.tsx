'use client';
import { useBreakPoint, usePalette } from '@/hooks';
import { Box, Typography } from '@mui/material';
import React from 'react';

export const NoSelectedHeader = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			width={['xs'].includes(breakpoint) ? '70%' : '50%'}
		>
			<Typography
				variant="body1"
				textAlign="center"
				color={palette.text.disabled}
				sx={{
					width: '100%',
				}}
			>
				さまざまなAIキャラクター達との素晴らしい会話を始めましょう！
			</Typography>
		</Box>
	);
};
