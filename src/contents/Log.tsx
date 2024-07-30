'use client';
import { CommonStyleHeader, LogChatArea } from '@/components';
import { useChat } from '@/hooks';
import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export const Log = () => {
	const { chat, handleGetSpeakerUuidBySelectedItem } = useChat();
	const speakerUuid: string | undefined = handleGetSpeakerUuidBySelectedItem();
	const chatContainerRef = useRef<HTMLDivElement>(null);
	const [shouldScroll, setShouldScroll] = useState(true);

	const handleScroll = () => {
		const chatContainer = chatContainerRef.current;
		if (chatContainer) {
			const isAtBottom =
				chatContainer.scrollHeight - chatContainer.scrollTop <=
				chatContainer.clientHeight + 5;
			setShouldScroll(isAtBottom);
		}
	};

	useEffect(() => {
		const chatContainer = chatContainerRef.current;
		if (chatContainer && shouldScroll) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}, [chat, shouldScroll]);

	return (
		<>
			<CommonStyleHeader speakerUuid={speakerUuid || ''} />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="start"
				width="100%"
				height="100%"
				sx={{
					overflowY: 'overlay',
					'&:not(:hover)': {
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'transparent',
						},
					},
				}}
				ref={chatContainerRef}
				onScroll={handleScroll}
			>
				<LogChatArea />
			</Box>
		</>
	);
};
