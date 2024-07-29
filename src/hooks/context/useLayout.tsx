'use client';
import { HandleCharacterSelectProps, UseLayoutProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';
import { useBreakPoint } from '../common';

export const useLayout = (): UseLayoutProps => {
	const breakpoint = useBreakPoint();
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
	} = context;

	const handleCharacterSelect = ({
		uuid,
	}: HandleCharacterSelectProps): void => {
		if (selectedCharacterUuid === uuid) {
			setSelectedCharacterUuid(null);
			setSelectedContent('noSelected');
			if (['xs', 'sm'].includes(breakpoint)) {
				setIsLeftBar(false);
			}
		} else {
			setSelectedCharacterUuid(uuid);
			setSelectedContent('character');
			if (['xs', 'sm'].includes(breakpoint)) {
				setIsLeftBar(false);
			}
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
	};
};
