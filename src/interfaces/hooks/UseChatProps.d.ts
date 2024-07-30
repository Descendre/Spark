import { KeyboardEvent } from 'react';
import { ChatRoomsResponse } from '@/interfaces';

export interface UseChatProps {
	text: { [uuid: string]: string };
	setText: React.Dispatch<React.SetStateAction<{ [uuid: string]: string }>>;
	isSending: boolean;
	setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
	chatRooms: ChatRoomsResponse | null;
	setChatRooms: React.Dispatch<React.SetStateAction<ChatRoomsResponse | null>>;
	handleCreateChatRoom: ({
		roomName,
		characterID,
	}: HandleCreateChatRoomProps) => Promise<void>;
	handleGetChatRooms: () => Promise<void>;
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

export interface HandleCreateChatRoomProps {
	roomName: string;
	characterID: string;
}
