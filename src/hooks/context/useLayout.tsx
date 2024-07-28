'use client';
import { HandleCharacterSelectProps, UseLayoutProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useLayout = (): UseLayoutProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		selectedContent,
		setSelectedContent,
		selectedCharacterUuid,
		setSelectedCharacterUuid,
	} = context;

	const handleCharacterSelect = ({
		uuid,
	}: HandleCharacterSelectProps): void => {
		if (selectedCharacterUuid === uuid) {
			setSelectedCharacterUuid(null);
			setSelectedContent('noSelected');
		} else {
			setSelectedCharacterUuid(uuid);
			setSelectedContent('character');
		}
	};
	console.log(selectedContent);

	return {
		selectedContent,
		setSelectedContent,
		selectedCharacterUuid,
		setSelectedCharacterUuid,
		handleCharacterSelect,
	};
};
