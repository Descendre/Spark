'use client';
import { usePalette } from '@/hooks';
import { Send } from '@mui/icons-material';
import { Box, InputAdornment, InputBase, TextField } from '@mui/material';

export const FooterInputBar = () => {
	const palette = usePalette();

	return (
		<>
			<TextField
				multiline
				maxRows={6}
				placeholder="AIキャラクターにメッセージを送信する"
				sx={{
					width: '80%',
					'& .MuiOutlinedInput-root': {
						backgroundColor: palette.component.footer.inputBar,
						borderRadius: '30px',
						'& .MuiInputBase-input': {
							padding: '0 30px',
							'::placeholder': {
								color: palette.text.disabled,
							},
						},
						'& fieldset': {
							borderColor: palette.layout.line.sub,
						},
						'&:hover fieldset': {
							borderColor: palette.layout.line.sub,
						},
						'&.Mui-focused fieldset': {
							borderColor: palette.layout.line.sub,
							borderWidth: '1px',
						},
					},
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Send />
						</InputAdornment>
					),
				}}
			/>
		</>
	);
};
