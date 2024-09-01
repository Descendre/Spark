'use client';
import {
	HandleCharacterSelectProps,
	HandleLogSelectProps,
	UseLayoutProps,
} from '@/interfaces';
import { Context } from '@/provider';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useBreakPoint } from '../common';

export const useLayout = (): UseLayoutProps => {
	const router = useRouter();
	const breakpoint = useBreakPoint();
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		selectedContent,
		setSelectedContent,
		selectedItem,
		setSelectedItem,
		isLeftBar,
		setIsLeftBar,
		isLeftDrawer,
		setIsLeftDrawer,
		isLogSelect,
		setIsLogSelect,
		isCustomModal,
		setIsCustomModal,
	} = context;

	const handleCharacterSelect = ({
		uuid,
	}: HandleCharacterSelectProps): void => {
		if (selectedItem === uuid) {
			setSelectedItem(null);
			setSelectedContent('noSelected');
		} else {
			setSelectedItem(uuid);
			setSelectedContent('character');
			router.push('/');
			if (['xs', 'sm'].includes(breakpoint)) {
				setIsLeftDrawer(false);
			}
		}
	};

	const handleLogSelect = ({ chatRoomId }: HandleLogSelectProps): void => {
		if (selectedItem === chatRoomId) {
			setSelectedItem(null);
			setSelectedContent('noSelected');
		} else {
			setSelectedItem(chatRoomId);
			setSelectedContent('log');
			router.push(`/c/${chatRoomId}`);
			if (['xs', 'sm'].includes(breakpoint)) {
				setIsLeftDrawer(false);
			}
		}
	};

	return {
		selectedContent,
		setSelectedContent,
		selectedItem,
		setSelectedItem,
		isLeftBar,
		setIsLeftBar,
		isLeftDrawer,
		setIsLeftDrawer,
		isLogSelect,
		setIsLogSelect,
		handleCharacterSelect,
		handleLogSelect,
		isCustomModal,
		setIsCustomModal,
	};
};
