'use client';
import { CommonStyleHeader, LogChatArea } from '@/components';
import { useChat } from '@/hooks';
import { Box } from '@mui/material';

export const Log = () => {
	const { handleGetSpeakerUuidBySelectedItem } = useChat();
	const speakerUuid: string | undefined = handleGetSpeakerUuidBySelectedItem();

	return (
		<>
			<CommonStyleHeader speakerUuid={speakerUuid || ''} />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="start"
				width="100%"
				height="100%"
			>
				<LogChatArea />
			</Box>
		</>
	);
};
