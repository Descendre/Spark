'use client';
import { useCharacter, useChat } from '@/hooks';
import { useEffect } from 'react';

export default function Home() {
	const { handleGetCharacters } = useCharacter();
	const { handleGetChatRooms } = useChat();

	useEffect(() => {
		handleGetCharacters();
		handleGetChatRooms();
	}, []);

	return <>chat</>;
}
