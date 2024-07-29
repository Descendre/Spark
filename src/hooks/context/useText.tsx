'use client';
import {
	HandleKeyDownProps,
	HandleSetTextProps,
	UseTextProps,
	VoicevoxAudioQueryResponse,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useText = (): UseTextProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		selectedCharacterUuid,
		text,
		setText,
		style,
		isSending,
		setIsSending,
	} = context;

	const handleSetText = ({ event }: HandleSetTextProps): void => {
		if (!selectedCharacterUuid) return;
		setText((prevText) => ({
			...prevText,
			[selectedCharacterUuid]: event.target.value,
		}));
	};

	const handleKeyDown = ({ event }: HandleKeyDownProps): void => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			handeSendText();
		}
	};

	const handeSendText = async (): Promise<void> => {
		if (
			isSending ||
			!selectedCharacterUuid ||
			text[selectedCharacterUuid].length === 0
		)
			return;
		setIsSending(true);
		const audioQueryResponse =
			await axiosFetch.post<VoicevoxAudioQueryResponse>(
				`/api/voicevox/audio/audioQuery`,
				{
					text: text[selectedCharacterUuid],
					speaker: style[selectedCharacterUuid].id,
				}
			);
		const synthesisResponse = await axiosFetch.post<string>(
			`/api/voicevox/audio/synthesis`,
			{
				speaker: style[selectedCharacterUuid].id,
				audioQueryResponse: audioQueryResponse,
			}
		);
		const audio = new Audio(synthesisResponse);
		audio.addEventListener('ended', () => {
			setIsSending(false);
		});
		await audio.play();

		await axiosFetch.delete(`/api/voicevox/audio/synthesis`, {
			fileName: synthesisResponse,
		});

		setText((prevText) => ({
			...prevText,
			[selectedCharacterUuid]: '',
		}));
	};

	return {
		text,
		setText,
		handleSetText,
		handleKeyDown,
		handeSendText,
		isSending,
		setIsSending,
	};
};
