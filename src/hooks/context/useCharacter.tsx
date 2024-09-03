'use client';
import {
	HandleGetCharacterDetailProps,
	HandleSetCharacterStyleProps,
	UseCharacterProps,
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { findCharacterByUUID } from '@/utils';
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
		style,
		setStyle,
		customText,
		setCustomText,
		isCustom,
		setIsCustom,
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

		const newStyles = response.reduce(
			(acc, character) => {
				if (character.styles && character.styles.length > 0) {
					acc[character.speaker_uuid] = character.styles[0];
				}
				return acc;
			},
			{} as { [uuid: string]: { name: string; id: number; type: string } }
		);
		setStyle((prevStyle) => ({
			...prevStyle,
			...newStyles,
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

	const handleSetCharacterStyle = ({
		index,
		speakerUuid,
	}: HandleSetCharacterStyleProps): void => {
		if (!speakerUuid || !characters) return;
		const currentCharacter = findCharacterByUUID({
			array: characters,
			uuid: speakerUuid,
		});
		if (!currentCharacter) return;
		const newStyle = currentCharacter.styles[index];
		if (!newStyle) return;
		setStyle((prevStyle) => ({
			...prevStyle,
			[speakerUuid]: newStyle,
		}));
	};

	const handleSetCustomText = ({ text }: { text: string }): void => {
		setCustomText(text);
	};

	return {
		characters,
		setCharacters,
		characterDetails,
		setCharacterDetails,
		style,
		setStyle,
		handleGetCharacters,
		handleSetCharacterStyle,
		customText,
		setCustomText,
		handleSetCustomText,
		isCustom,
		setIsCustom,
	};
};
