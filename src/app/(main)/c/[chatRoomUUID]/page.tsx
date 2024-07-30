'use client';
import { useCharacter, useChat, useLayout } from '@/hooks';
import { ChatView } from '@/views';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const { chatRooms, handleGetChatRooms } = useChat();
	const { characters, handleGetCharacters } = useCharacter();
	const { chatRoomUUID } = useParams();
	const { setIsLogSelect, setSelectedContent, setSelectedItem } = useLayout();

	useEffect(() => {
		if (chatRoomUUID) {
			setSelectedContent('log');
			setIsLogSelect(true);
		}
		if (chatRoomUUID && typeof chatRoomUUID === 'string') {
			setSelectedItem(chatRoomUUID);
		}
		if (!characters) {
			handleGetCharacters();
		}
		if (!chatRooms) {
			handleGetChatRooms();
		}
	}, []);

	return (
		<>
			<ChatView />
		</>
	);
}
