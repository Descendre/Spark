'use client';
import {
	HandleKeyDownProps,
	HandleSetTextProps,
	UseTextProps,
} from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useText = (): UseTextProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { selectedCharacterUuid, text, setText } = context;

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

	const handeSendText = (): void => {
		if (!selectedCharacterUuid) return;
		console.log(text[selectedCharacterUuid]);
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
	};
};
