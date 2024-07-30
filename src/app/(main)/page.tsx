'use client';
import { useCharacter, useChat } from '@/hooks';
import { MainView } from '@/views';
import { useEffect } from 'react';

export default function Home() {
	const { chatRooms, handleGetChatRooms } = useChat();
	const { characters, handleGetCharacters } = useCharacter();

	useEffect(() => {
		if (!characters) {
			handleGetCharacters();
		}
		if (!chatRooms) {
			handleGetChatRooms();
		}
	}, []);

	return (
		<>
			<MainView />
		</>
	);
}
