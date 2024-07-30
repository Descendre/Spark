'use client';
import { useChat, useCharacter } from '@/hooks';
import { MainView } from '@/views';
import { useEffect } from 'react';

export default function Home() {
	const { handleGetChatRooms } = useChat();
	const { handleGetCharacters } = useCharacter();

	useEffect(() => {
		handleGetCharacters();
		handleGetChatRooms();
	}, []);

	return (
		<>
			<MainView />
		</>
	);
}
