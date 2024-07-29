'use client';
import {
	HandleGetCharacterDetailProps,
	UseCharacterProps,
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useCharacter = (): UseCharacterProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		characters,
		setCharacters,
		characterDetails,
		setCharacterDetails,
		setText,
	} = context;

	const handleGetCharacters = async (): Promise<void> => {
		const response = await axiosFetch.get<VoicevoxSpeakersResponse>(
			'/api/voicevox/characters'
		);

		const newText = response.reduce(
			(acc, character) => {
				acc[character.speaker_uuid] = '';
				return acc;
			},
			{} as { [uuid: string]: string }
		);

		setText((prevText) => ({
			...prevText,
			...newText,
		}));

		setCharacters(response);
		response.map((chracter) => {
			handleGetCharacterDetail({ characterUuid: chracter.speaker_uuid });
		});
	};

	const handleGetCharacterDetail = async ({
		characterUuid,
	}: HandleGetCharacterDetailProps): Promise<void> => {
		const response = await axiosFetch.get<VoicevoxCharacterDetailResponse>(
			`/api/voicevox/characterDetail/${characterUuid}`
		);
		setCharacterDetails((prev) => ({
			...prev,
			[characterUuid]: response,
		}));
	};

	return {
		characters,
		setCharacters,
		characterDetails,
		setCharacterDetails,
		handleGetCharacters,
	};
};
