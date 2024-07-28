'use client';
import { useCharacter } from '@/hooks';
import { MainView } from '@/views';
import { useEffect } from 'react';

export default function Home() {
	const { handleGetCharacters } = useCharacter();

	useEffect(() => {
		handleGetCharacters();
	}, []);

	return (
		<>
			<MainView />
		</>
	);
}
