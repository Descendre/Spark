'use client';
import { HandleTranscriptSendProps, UseCallProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';
import { useChat } from './useChat';
import { useRouter } from 'next/navigation';
import 'regenerator-runtime';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';

export const useCall = (): UseCallProps => {
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();
	const router = useRouter();
	const {
		handleCreateChatRoom,
		handleGetChatRooms,
		handleSendText,
		handleSetChat,
		handleAddUserChat,
		handleGetChats,
		handleAddAIChat,
		handlePlayVoice,
	} = useChat();

	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		selectedItem,
		setSelectedContent,
		setIsLogSelect,
		style,
		setIsSending,
	} = context;

	useEffect(() => {
		SpeechRecognition.stopListening();
	}, [selectedItem]);

	const handleNewCallStart = async (): Promise<void> => {
		if (!selectedItem || !browserSupportsSpeechRecognition) return;
		const response = await handleCreateChatRoom({
			roomName: 'test room name',
			speakerUuid: selectedItem,
		});
		await handleGetChatRooms();
		router.push(`/c/${response.id}?callStart=true`);
		setSelectedContent('call');
		setIsLogSelect(true);
		setTimeout(() => {
			SpeechRecognition.startListening({ continuous: true });
		}, 2000);
	};

	const handleCallStart = (): void => {
		if (!browserSupportsSpeechRecognition) return;
		setSelectedContent('call');
		setIsLogSelect(true);
		SpeechRecognition.startListening({ continuous: true });
	};

	const handleCallEnd = (): void => {
		setSelectedContent('log');
		SpeechRecognition.stopListening();
	};

	const handleCallPlay = (): void => {
		SpeechRecognition.startListening({ continuous: true });
	};

	const handleCallPause = (): void => {
		SpeechRecognition.stopListening();
	};

	const handleTranscriptSend = async ({
		uuid,
		chatRoomId,
	}: HandleTranscriptSendProps): Promise<void> => {
		if (transcript.length === 0 || !chatRoomId) return;
		handleSendText({ uuid: uuid, content: transcript, chatRoomId: chatRoomId });
	};

	return {
		listening,
		handleNewCallStart,
		handleCallStart,
		handleCallEnd,
		handleCallPlay,
		handleCallPause,
		handleTranscriptSend,
	};
};
