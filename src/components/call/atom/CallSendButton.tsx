'use client';
import { useCall, useChat, useLayout, usePalette } from '@/hooks';
import { HourglassTop, Send } from '@mui/icons-material';
import { Avatar, Tooltip } from '@mui/material';

export const CallSendButton = () => {
	const palette = usePalette();
	const { selectedItem } = useLayout();
	const { handleTranscriptSend } = useCall();
	const { handleGetSpeakerUuidBySelectedItem, isSending } = useChat();
	const speakerUuid: string | undefined = handleGetSpeakerUuidBySelectedItem();

	return (
		<Tooltip title="送信" placement="top">
			<Avatar
				onClick={() => {
					if (speakerUuid && selectedItem && !isSending) {
						handleTranscriptSend({
							uuid: speakerUuid,
							chatRoomId: selectedItem,
						});
					}
				}}
				sx={{
					backgroundColor: palette.action.disabled,
					width: '60px',
					height: '60px',
					cursor: 'pointer',
				}}
			>
				{isSending ? (
					<HourglassTop
						sx={{
							color: palette.text.primary,
						}}
					/>
				) : (
					<Send
						sx={{
							color: palette.text.primary,
						}}
					/>
				)}
			</Avatar>
		</Tooltip>
	);
};
