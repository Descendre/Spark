'use client';
import { useCharacter, useChat, useLayout } from '@/hooks';
import { ChatView } from '@/views';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const { chatRooms, handleGetChatRooms } = useChat();
	const { characters, handleGetCharacters } = useCharacter();
	const { chatRoomUUID } = useParams() as { chatRoomUUID: string };
	const { setSelectedItem, setSelectedContent, setIsLogSelect } = useLayout();

	useEffect(() => {
		if (chatRoomUUID) {
			setSelectedItem(chatRoomUUID);
		}
		if (!characters) {
			handleGetCharacters();
		}
		if (!chatRooms) {
			handleGetChatRooms();
		}
		setSelectedContent('log');
		setIsLogSelect(true);
	}, []);

	return (
		<>
			<ChatView />
		</>
	);
}
