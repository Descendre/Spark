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
		isLeftBar,
		setIsLeftBar,
		isLeftDrawer,
		setIsLeftDrawer,
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

	return {
		selectedContent,
		setSelectedContent,
		selectedCharacterUuid,
		setSelectedCharacterUuid,
		handleCharacterSelect,
		isLeftBar,
		setIsLeftBar,
		isLeftDrawer,
		setIsLeftDrawer,
	};
};
