'use client';
import { useCharacter, useChat, useLayout } from '@/hooks';
import { ChatView } from '@/views';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const searchParams = useSearchParams();
	const callStart = searchParams.get('callStart');
	const { chatRooms, handleGetChatRooms } = useChat();
	const { characters, handleGetCharacters } = useCharacter();
	const { chatRoomUUID } = useParams();
	const { setIsLogSelect, setSelectedContent, setSelectedItem } = useLayout();

	useEffect(() => {
		if (chatRoomUUID && !callStart) {
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
