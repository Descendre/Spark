'use client';
import { Box } from '@mui/material';
import { LogAIChatBox, LogUserChatBox } from '../atom';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useChat } from '@/hooks';

export const LogChatArea = () => {
	const { handleGetChats, chat } = useChat();
	const { chatRoomUUID } = useParams();

	useEffect(() => {
		if (chatRoomUUID && typeof chatRoomUUID === 'string') {
			handleGetChats({ chatRoomId: chatRoomUUID });
		}
	}, [chatRoomUUID]);

	return (
		<Box
			display="flex"
			justifyContent="start"
			alignItems="center"
			flexDirection="column"
			gap="30px"
			width="90%"
			height="1000px"
			maxWidth="1000px"
			padding="100px 0"
			margin="0 auto"
		>
			{chatRoomUUID &&
				typeof chatRoomUUID === 'string' &&
				chat[chatRoomUUID] &&
				chat[chatRoomUUID].map((chatEntry, index) => (
					<Box key={index} width="100%">
						{chatEntry.speakerType === 'AI' ? (
							<LogAIChatBox
								speakerUuid={chatEntry.speakerUuid}
								text={chatEntry.content}
								styleId={chatEntry.speakerStyle}
							/>
						) : (
							<LogUserChatBox text={chatEntry.content} />
						)}
					</Box>
				))}
		</Box>
	);
};
