'use client';
import { useLayout, usePalette, useText } from '@/hooks';
import { Send } from '@mui/icons-material';
import { InputAdornment, TextField, Tooltip } from '@mui/material';

export const MainFooterInputBar = () => {
	const palette = usePalette();
	const { selectedContent, selectedCharacterUuid } = useLayout();
	const { text, handleSetText, handleKeyDown, handeSendText } = useText();
	const disabled: boolean = selectedContent !== 'character';

	return (
		<>
			<TextField
				value={selectedCharacterUuid ? text[selectedCharacterUuid] : ''}
				onChange={(event) => handleSetText({ event: event })}
				onKeyDown={(event) => handleKeyDown({ event: event })}
				disabled={disabled}
				size="small"
				multiline
				maxRows={6}
				placeholder="AIキャラクターにメッセージを送信する"
				sx={{
					width: '90%',
					'& .MuiOutlinedInput-root': {
						backgroundColor: palette.layout.mainLayout.footer.inputBar,
						borderRadius: '30px',
						'& .MuiInputBase-input': {
							padding: '4px 30px',
							'::placeholder': {
								color: palette.text.disabled,
							},
						},
						'& fieldset': {
							borderColor: palette.layout.mainLayout.line.main,
						},
						'&:hover fieldset': {
							borderColor: palette.layout.mainLayout.line.main,
						},
						'&.Mui-focused fieldset': {
							borderColor: palette.layout.mainLayout.line.main,
							borderWidth: '1px',
						},
						'&.Mui-disabled fieldset': {
							borderColor: palette.layout.mainLayout.line.sub,
							borderWidth: '1px',
						},
					},
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Tooltip title="送信" placement="top">
								<Send
									sx={{
										color:
											!selectedCharacterUuid ||
											disabled ||
											text[selectedCharacterUuid].length === 0
												? palette.text.disabled
												: palette.text.primary,
										cursor: 'pointer',
									}}
									onClick={handeSendText}
								/>
							</Tooltip>
						</InputAdornment>
					),
				}}
			/>
		</>
	);
};
