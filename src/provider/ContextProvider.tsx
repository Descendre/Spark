'use client';
import {
	characterStyleProps,
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
	const [isLeftBar, setIsLeftBar] = useState<boolean>(true);
	const [isLeftDrawer, setIsLeftDrawer] = useState<boolean>(false);
	const [isLogSelect, setIsLogSelect] = useState<boolean>(false);
	const [text, setText] = useState<{ [uuid: string]: string }>({});
	const [style, setStyle] = useState<{ [uuid: string]: characterStyleProps }>(
		{}
	);
	const [isSending, setIsSending] = useState<boolean>(false);

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
		isLogSelect,
		setIsLogSelect,
		text,
		setText,
		style,
		setStyle,
		isSending,
		setIsSending,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
