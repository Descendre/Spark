'use client';
import { UseCallProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';
import { useChat } from './useChat';
import { useRouter } from 'next/navigation';

export const useCall = (): UseCallProps => {
	const router = useRouter();
	const { handleCreateChatRoom, handleGetChatRooms } = useChat();

	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { selectedItem, setSelectedContent, setIsLogSelect } = context;

	const handleNewCallStart = async (): Promise<void> => {
		if (!selectedItem) return;
		setSelectedContent('call');
		setIsLogSelect(true);
		const response = await handleCreateChatRoom({
			roomName: 'test room name',
			speakerUuid: selectedItem,
		});
		await handleGetChatRooms();
		router.push(`/c/${response.id}?callStart=true`);
	};

	const handleCallEnd = (): void => {
		setSelectedContent('log');
	};

	return {
		handleNewCallStart,
		handleCallEnd,
	};
};
