'use client';
import {
	ContextProviderProps,
	SelectedContentProps,
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '@/interfaces';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [characters, setCharacters] = useState<VoicevoxSpeakersResponse | null>(
		null
	);
	const [characterDetails, setCharacterDetails] = useState<{
		[uuid: string]: VoicevoxCharacterDetailResponse;
	}>({});
	const [selectedContent, setSelectedContent] =
		useState<SelectedContentProps>('noSelected');
	const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<
		string | null
	>(null);
	const [isLeftBar, setIsLeftBar] = useState<boolean>(false);
	const [isLeftDrawer, setIsLeftDrawer] = useState<boolean>(false);

	const contextValue = {
		characters,
		setCharacters,
		characterDetails,
		setCharacterDetails,
		selectedContent,
		setSelectedContent,
		selectedCharacterUuid,
		setSelectedCharacterUuid,
		isLeftBar,
		setIsLeftBar,
		isLeftDrawer,
		setIsLeftDrawer,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
