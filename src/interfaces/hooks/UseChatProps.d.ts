import { KeyboardEvent } from 'react';
import { ChatRoomsResponse } from '../api';

export interface UseChatProps {
	chatRooms: ChatRoomsResponse | null;
	setChatRooms: React.Dispatch<React.SetStateAction<ChatRoomsResponse | null>>;
	text: { [uuid: string]: string };
	setText: React.Dispatch<React.SetStateAction<{ [uuid: string]: string }>>;
	isSending: boolean;
	setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
	handleGetChatRooms: () => Promise<void>;
	handleCreateChatRoom: ({
		roomName,
		speakerUuid,
	}: HandleCreateChatRoomProps) => Promise<void>;
	handleGetSpeakerUuidBySelectedItem: () => string | undefined;
	handleSetText: ({ event }: HandleSetTextProps) => void;
	handleKeyDown: ({ event, uuid }: HandleKeyDownProps) => void;
	handeSendText: ({ uuid }: HandeSendTextProps) => void;
}

export interface HandleCreateChatRoomProps {
	roomName: string;
	speakerUuid: string;
}

export interface HandleSetTextProps {
	event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
	uuid: string;
}

export interface HandleKeyDownProps {
	event: KeyboardEvent<HTMLDivElement>;
	uuid: string;
}

export interface HandeSendTextProps {
	uuid: string;
}
