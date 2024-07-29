'use client';
import { useBreakPoint, useLayout, usePalette } from '@/hooks';
import { Login } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

export const NoSelectedHeader = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();
	const { isLeftBar, setIsLeftBar } = useLayout();

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap="20px"
			width={['xs'].includes(breakpoint) ? '70%' : '50%'}
			onClick={() => {
				if (!isLeftBar) {
					setIsLeftBar(true);
				}
			}}
			sx={{
				cursor: isLeftBar ? 'auto' : 'pointer',
			}}
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

			<Box display="flex" justifyContent="center" alignItems="center">
				<Typography
					variant="body1"
					textAlign="center"
					sx={{
						width: '100%',
					}}
				>
					Get Started
				</Typography>
				<Login />
			</Box>
		</Box>
	);
};
