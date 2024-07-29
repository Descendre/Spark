'use client';
import { usePalette } from '@/hooks';
import { Send } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

export const FooterInputBar = () => {
	const palette = usePalette();

	return (
		<>
			<TextField
				size="small"
				multiline
				maxRows={6}
				placeholder="AIキャラクターにメッセージを送信する"
				sx={{
					width: '90%',
					'& .MuiOutlinedInput-root': {
						backgroundColor: palette.component.footer.inputBar,
						borderRadius: '30px',
						'& .MuiInputBase-input': {
							padding: '4px 30px',
							'::placeholder': {
								color: palette.text.disabled,
							},
						},
						'& fieldset': {
							borderColor: palette.layout.mainLayout.line.sub,
						},
						'&:hover fieldset': {
							borderColor: palette.layout.mainLayout.line.sub,
						},
						'&.Mui-focused fieldset': {
							borderColor: palette.layout.mainLayout.line.sub,
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
