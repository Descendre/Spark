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
	const { transcript, listening, browserSupportsSpeechRecognition } =
		useSpeechRecognition();
	const router = useRouter();
	const { handleCreateChatRoom, handleGetChatRooms, handleSendText } =
		useChat();

	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { selectedItem, setSelectedContent, setIsLogSelect } = context;

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
		setTimeout(async () => {
			await SpeechRecognition.startListening({ language: 'ja-JP' });
		}, 1000);
	};

	const handleCallStart = async (): Promise<void> => {
		if (!browserSupportsSpeechRecognition) return;
		setSelectedContent('call');
		setIsLogSelect(true);
		await SpeechRecognition.startListening({ language: 'ja-JP' });
	};

	const handleCallEnd = async (): Promise<void> => {
		setSelectedContent('log');
		await SpeechRecognition.stopListening();
	};

	const handleCallPlay = async (): Promise<void> => {
		await SpeechRecognition.startListening({ language: 'ja-JP' });
	};

	const handleCallPause = async (): Promise<void> => {
		await SpeechRecognition.stopListening();
	};

	const handleTranscriptSend = async ({
		uuid,
		chatRoomId,
	}: HandleTranscriptSendProps): Promise<void> => {
		if (transcript.length === 0 || !chatRoomId) return;
		await handleSendText({
			uuid: uuid,
			content: transcript,
			chatRoomId: chatRoomId,
		});
	};

	const recognition = SpeechRecognition.getRecognition();
	if (recognition) {
		recognition.onend = async () => {
			await handleCallPause();
		};
	}

	return {
		listening,
		transcript,
		handleNewCallStart,
		handleCallStart,
		handleCallEnd,
		handleCallPlay,
		handleCallPause,
		handleTranscriptSend,
	};
};
