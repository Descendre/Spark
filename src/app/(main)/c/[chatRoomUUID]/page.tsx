'use client';
import { useCharacter, useChat, useLayout, useCall } from '@/hooks';
import { ChatView } from '@/views';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const { chatRooms, handleGetChatRooms } = useChat();
	const { characters, handleGetCharacters } = useCharacter();
	const searchParams = useSearchParams();
	const router = useRouter();
	const callStart = searchParams.get('callStart');
	const { chatRoomUUID } = useParams() as { chatRoomUUID: string };
	const { setSelectedItem, setSelectedContent, setIsLogSelect } = useLayout();
	const { handleNewCallStart } = useCall();

	useEffect(() => {
		if (chatRoomUUID) {
			setSelectedItem(chatRoomUUID);
		}
		if (chatRoomUUID && callStart) {
			router.push(`/c/${chatRoomUUID}`);
		}
		if (!callStart) {
			setSelectedContent('log');
			setIsLogSelect(true);
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
