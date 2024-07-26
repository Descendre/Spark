'use client';
import { UseCharacterProps, VoicevoxSpeakersResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider/ContextProvider';
import { useContext } from 'react';

export const useCharacter = (): UseCharacterProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { characters, setCharacters } = context;

	const handleGetCharacters = async (): Promise<void> => {
		const response = await axiosFetch.get<VoicevoxSpeakersResponse>(
			'/api/voicevox/characters'
		);
		setCharacters(response);
	};

	return {
		characters,
		setCharacters,
		handleGetCharacters,
	};
};
