import { KeyboardEvent } from 'react';

export interface UseTextProps {
	text: { [uuid: string]: text };
	setText: React.Dispatch<React.SetStateAction<{ [uuid: string]: text }>>;
	handleSetText: ({ event }: HandleSetTextProps) => void;
	handleKeyDown: ({ event }: HandleKeyDownProps) => void;
	handeSendText: () => void;
}

export interface HandleSetTextProps {
	event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}

export interface HandleKeyDownProps {
	event: KeyboardEvent<HTMLDivElement>;
}
