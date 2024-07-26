'use client';
import { ContextProviderProps, VoicevoxSpeakersResponse } from '@/interfaces';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [characters, setCharacters] = useState<VoicevoxSpeakersResponse | null>(
		null
	);

	const contextValue = {
		characters,
		setCharacters,
	};
	console.log(characters);

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
