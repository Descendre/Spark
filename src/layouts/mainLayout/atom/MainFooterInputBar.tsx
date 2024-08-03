'use client';
import { useCharacter, useChat, useLayout, usePalette } from '@/hooks';
import { findCharacterByUUID } from '@/utils';
import { HourglassTop, Send } from '@mui/icons-material';
import { InputAdornment, TextField, Tooltip } from '@mui/material';
import { useParams } from 'next/navigation';

export const MainFooterInputBar = () => {
	const palette = usePalette();
	const { chatRoomUUID } = useParams() as { chatRoomUUID: string };
	const { selectedContent, selectedItem } = useLayout();
	const { handleGetSpeakerUuidBySelectedItem } = useChat();
	const { text, handleSetText, handleKeyDown, handleSendText, isSending } =
		useChat();
	const { characters } = useCharacter();
	const disabled: boolean =
		selectedContent === 'noSelected' ||
		isSending ||
		(chatRoomUUID ? !(chatRoomUUID in text) : false);
	const speakerUuid: string | undefined = handleGetSpeakerUuidBySelectedItem();
	const uuid =
		selectedContent === 'character'
			? selectedItem
			: selectedContent === 'log'
				? speakerUuid
				: undefined;
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: uuid || '',
	});

	return (
		<>
			<TextField
				value={uuid ? text[uuid] : ''}
				onChange={(event) => handleSetText({ event: event, uuid: uuid || '' })}
				onKeyDown={(event) => {
					if (uuid && text[uuid].trim()) {
						handleKeyDown({
							event: event,
							uuid: uuid || '',
							chatRoomId:
								typeof chatRoomUUID === 'string' ? chatRoomUUID : undefined,
						});
					}
				}}
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
												!uuid || disabled || text[uuid]?.trim().length === 0
													? palette.text.disabled
													: palette.text.primary,
											userSelect:
												!uuid || disabled || text[uuid]?.trim().length === 0
													? 'none'
													: 'auto',
											cursor:
												!uuid || disabled || text[uuid]?.trim().length === 0
													? 'auto'
													: 'pointer',
										}}
										onClick={() => {
											if (uuid && text[uuid].trim()) {
												handleSendText({
													uuid: uuid || '',
													content: text[uuid || ''],
													chatRoomId:
														typeof chatRoomUUID === 'string'
															? chatRoomUUID
															: undefined,
												});
											}
										}}
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
