'use client';
import { useCharacter, useLayout, usePalette, useChat } from '@/hooks';
import { findCharacterByUUID } from '@/utils';
import { HourglassTop, Send } from '@mui/icons-material';
import { InputAdornment, TextField, Tooltip } from '@mui/material';

export const MainFooterInputBar = () => {
	const palette = usePalette();
	const { selectedContent, selectedCharacterUuid } = useLayout();
	const { text, handleSetText, handleKeyDown, handeSendText, isSending } =
		useChat();
	const { characters } = useCharacter();
	const disabled: boolean = selectedContent !== 'character' || isSending;
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: selectedCharacterUuid || '',
	});

	return (
		<>
			<TextField
				value={selectedCharacterUuid ? text[selectedCharacterUuid] : ''}
				onChange={(event) => handleSetText({ event: event })}
				onKeyDown={(event) => handleKeyDown({ event: event })}
				disabled={disabled}
				size="small"
				multiline
				fullWidth
				maxRows={6}
				placeholder={
					currentCharacter
						? `${currentCharacter.name}にメッセージを送信する`
						: 'キャラクターを選択してメッセージを送信する'
				}
				sx={{
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
								{isSending ? (
									<HourglassTop
										sx={{
											color: palette.text.disabled,
										}}
									/>
								) : (
									<Send
										sx={{
											color:
												!selectedCharacterUuid ||
												disabled ||
												text[selectedCharacterUuid].length === 0
													? palette.text.disabled
													: palette.text.primary,
											userSelect:
												!selectedCharacterUuid ||
												disabled ||
												text[selectedCharacterUuid].length === 0
													? 'none'
													: 'auto',
											cursor:
												!selectedCharacterUuid ||
												disabled ||
												text[selectedCharacterUuid].length === 0
													? 'auto'
													: 'pointer',
										}}
										onClick={handeSendText}
									/>
								)}
							</Tooltip>
						</InputAdornment>
					),
				}}
			/>
		</>
	);
};
