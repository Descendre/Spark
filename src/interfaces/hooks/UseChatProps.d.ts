import { KeyboardEvent } from 'react';
import {
	ChatNewRoomResponse,
	ChatRoomsResponse,
	ChatsResponse,
	ChatGPTResponse,
} from '../api';

export interface UseChatProps {
	chatRooms: ChatRoomsResponse | null;
	setChatRooms: React.Dispatch<React.SetStateAction<ChatRoomsResponse | null>>;
	text: { [uuid: string]: string };
	setText: React.Dispatch<React.SetStateAction<{ [uuid: string]: string }>>;
	isSending: boolean;
	setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
	chat: { [uuid: string]: ChatsResponse };
	setChat: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: ChatsResponse }>
	>;
	handlePlayVoice: ({ uuid, content }: HandlePlayVoiceProps) => Promise<void>;
	handleGetChatRooms: () => Promise<void>;
	handleGetChats: ({ chatRoomId }: HandleGetChatsProps) => Promise<void>;
	handleCreateChatRoom: ({
		roomName,
		speakerUuid,
	}: HandleCreateChatRoomProps) => Promise<ChatNewRoomResponse>;
	handleAddUserChat: ({
		content,
		chatRoomId,
	}: HandleAddUserChatProps) => Promise<void>;
	handleChatGPT: ({
		model,
		messages,
	}: HandleChatGPTProps) => Promise<ChatGPTResponse>;
	handleAddAIChat: ({
		speakerUuid,
		speakerStyle,
		content,
		chatRoomId,
	}: HandleAddAIChatProps) => Promise<void>;
	handleGetSpeakerUuidBySelectedItem: () => string | undefined;
	handleSetText: ({ event }: HandleSetTextProps) => void;
	handleSetChat: ({ chatRoomId, content }: HandleSetChatProps) => void;
	handleKeyDown: ({ event, uuid }: HandleKeyDownProps) => void;
	handleSendText: ({ uuid }: HandleSendTextProps) => Promise<void>;
}

export interface HandleCreateChatRoomProps {
	roomName: string;
	speakerUuid: string;
}

export interface HandleGetChatsProps {
	chatRoomId: string;
}

export interface HandleAddUserChatProps {
	chatRoomId: string;
	content: string;
}

export interface HandleAddAIChatProps {
	chatRoomId: string;
	content: string;
	speakerStyle: number;
	speakerUuid: string;
}

export interface HandleChatGPTProps {
	model: string;
	messages: {
		role: string;
		content: string;
	}[];
}

export interface HandleSetTextProps {
	event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
	uuid: string;
}

export interface HandleSetChatProps {
	chatRoomId: string;
	content: string;
}

export interface HandlePlayVoiceProps {
	uuid: string;
	content: string;
}

export interface HandleKeyDownProps {
	event: KeyboardEvent<HTMLDivElement>;
	uuid: string;
	chatRoomId?: string;
}

export interface HandleSendTextProps {
	uuid: string;
	chatRoomId?: string;
	content: string;
}
