'use client';
import { HandleCharacterSelectProps, UseLayoutProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useLayout = (): UseLayoutProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { selectedCharacterUuid, setSelectedCharacterUuid } = context;

	const handleCharacterSelect = ({
		uuid,
	}: HandleCharacterSelectProps): void => {
		if (selectedCharacterUuid === uuid) {
			setSelectedCharacterUuid(null);
		} else {
			setSelectedCharacterUuid(uuid);
		}
	};

	return {
		selectedCharacterUuid,
		setSelectedCharacterUuid,
		handleCharacterSelect,
	};
};
