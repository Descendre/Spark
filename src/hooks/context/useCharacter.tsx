'use client';
import { VoicevoxSpeakersResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';

export const useCharacter = () => {
	const handleGetCharacters = async (): Promise<void> => {
		const response = await axiosFetch.get<VoicevoxSpeakersResponse>(
			'/api/voicevox/characters'
		);
		console.log(response[0].name);
	};

	return {
		handleGetCharacters,
	};
};
