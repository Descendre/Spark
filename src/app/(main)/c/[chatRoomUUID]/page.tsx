'use client';
import { useCharacter, useChat, useLayout } from '@/hooks';
import { ChatView } from '@/views';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const { handleGetChatRooms } = useChat();
	const { handleGetCharacters } = useCharacter();
	const { chatRoomUUID } = useParams();
	const { setIsLogSelect, setSelectedContent } = useLayout();

	useEffect(() => {
		if (chatRoomUUID) {
			setIsLogSelect(true);
			setSelectedContent('log');
		}
	}, []);

	useEffect(() => {
		handleGetCharacters();
		handleGetChatRooms();
	}, []);

	return (
		<>
			<ChatView />
		</>
	);
}
