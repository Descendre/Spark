'use client';
import {
	ChatNewRoomResponse,
	ChatRoomsResponse,
	ChatsResponse,
	HandeSendTextProps,
	HandleAddAIChatProps,
	HandleAddUserChatProps,
	HandleCreateChatRoomProps,
	HandleFetchChatsProps,
	HandleGetChatsProps,
	HandleKeyDownProps,
	HandlePlayVoiceProps,
	HandleSetChatProps,
	HandleSetTextProps,
	UseChatProps,
	VoicevoxAudioQueryResponse,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export const useChat = (): UseChatProps => {
	const router = useRouter();
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		chatRooms,
		setChatRooms,
		selectedItem,
		text,
		setText,
		style,
		isSending,
		setIsSending,
		selectedContent,
		chat,
		setChat,
	} = context;

	const handleGetChatRooms = async (): Promise<void> => {
		const response =
			await axiosFetch.get<ChatRoomsResponse>(`/api/chat/chatRoom`);
		setChatRooms(response);
		const newText = response.reduce(
			(acc, chatRoom) => {
				acc[chatRoom.id] = '';
				return acc;
			},
			{} as { [key: string]: string }
		);
		setText((prevText) => ({
			...prevText,
			...newText,
		}));
	};

	const handleGetChats = async ({
		chatRoomId,
	}: HandleGetChatsProps): Promise<void> => {
		await axiosFetch.get<ChatsResponse>(`/api/chat/${chatRoomId}`);
		if (chat[chatRoomId]) {
			return;
		} else {
			handleFetchChats({ chatRoomId: chatRoomId });
		}
	};

	const handleFetchChats = async ({ chatRoomId }: HandleFetchChatsProps) => {
		const response = await axiosFetch.get<ChatsResponse>(
			`/api/chat/${chatRoomId}`
		);
		setChat((newChat) => ({
			...newChat,
			[chatRoomId]: response,
		}));
	};

	const handleCreateChatRoom = async ({
		roomName,
		speakerUuid,
	}: HandleCreateChatRoomProps): Promise<ChatNewRoomResponse> => {
		const response = await axiosFetch.post<ChatNewRoomResponse>(
			`/api/chat/chatRoom`,
			{
				roomName: roomName,
				speakerUuid: speakerUuid,
			}
		);
		return response;
	};

	const handleAddUserChat = async ({
		content,
		chatRoomId,
	}: HandleAddUserChatProps): Promise<void> => {
		await axiosFetch.post(`/api/chat/${chatRoomId}`, {
			speakerType: 'USER',
			content: content,
		});
	};

	const handleAddAIChat = async ({
		content,
		chatRoomId,
		speakerStyle,
		speakerUuid,
	}: HandleAddAIChatProps): Promise<void> => {
		await axiosFetch.post(`/api/chat/${chatRoomId}`, {
			speakerType: 'AI',
			speakerStyle: speakerStyle,
			speakerUuid: speakerUuid,
			content: content,
		});
	};

	const handleGetSpeakerUuidBySelectedItem = (): string | undefined => {
		if (!chatRooms) return undefined;
		const index = chatRooms.findIndex((room) => room.id === selectedItem);
		return index !== -1 ? chatRooms[index].speakerUuid : undefined;
	};

	const handleSetText = ({ event, uuid }: HandleSetTextProps): void => {
		if (!uuid) return;
		setText((prevText) => ({
			...prevText,
			[uuid]: event.target.value,
		}));
	};

	const handleSetChat = ({ chatRoomId, content }: HandleSetChatProps): void => {
		setChat((prevChat) => {
			const existingChats = prevChat[chatRoomId] || [];
			return {
				...prevChat,
				[chatRoomId]: [...existingChats, content],
			};
		});
	};

	const handlePlayVoice = async ({
		uuid,
	}: HandlePlayVoiceProps): Promise<void> => {
		const audioQueryResponse =
			await axiosFetch.post<VoicevoxAudioQueryResponse>(
				`/api/voicevox/audio/audioQuery`,
				{
					text: text[uuid],
					speaker: style[uuid].id,
				}
			);

		const synthesisResponse = await axiosFetch.post<string>(
			`/api/voicevox/audio/synthesis`,
			{
				speaker: style[uuid].id,
				audioQueryResponse: audioQueryResponse,
			}
		);
		const audio = new Audio(synthesisResponse);
		audio.addEventListener('ended', () => {
			setIsSending(false);
		});
		await audio.play();

		await axiosFetch.delete(`/api/voicevox/audio/synthesis`, {
			fileName: synthesisResponse,
		});
	};

	const handleKeyDown = ({
		event,
		uuid,
		chatRoomId,
	}: HandleKeyDownProps): void => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			const target = event.target as HTMLTextAreaElement;
			const value = target.value;
			handeSendText({ content: value, chatRoomId: chatRoomId, uuid: uuid });
		}
	};

	const handeSendText = async ({
		uuid,
		content,
		chatRoomId,
	}: HandeSendTextProps): Promise<void> => {
		if (isSending || !uuid || text[uuid].length === 0) return;
		setIsSending(true);
		setText((prevText) => ({
			...prevText,
			[uuid]: '',
		}));

		if (selectedContent === 'character') {
			const response = await handleCreateChatRoom({
				roomName: 'test room name',
				speakerUuid: uuid,
			});
			await handleGetChatRooms();
			handleSetChat({ chatRoomId: response.id, content: content });
			await handleAddUserChat({ content: content, chatRoomId: response.id });
			router.push(`/c/${response.id}`);
			await handleFetchChats({ chatRoomId: response.id });

			setTimeout(async () => {
				await handleAddAIChat({
					content: content,
					chatRoomId: response.id,
					speakerUuid: uuid,
					speakerStyle: style[uuid].id,
				});
				await handlePlayVoice({ uuid: uuid });
				await handleFetchChats({ chatRoomId: response.id });
			}, 2000);
		} else if (selectedContent === 'log') {
			if (!chatRoomId) return;
			handleSetChat({ chatRoomId: chatRoomId, content: content });
			await handleAddUserChat({ content: content, chatRoomId: chatRoomId });
			await handleFetchChats({ chatRoomId: chatRoomId });

			setTimeout(async () => {
				await handleAddAIChat({
					content: content,
					chatRoomId: chatRoomId,
					speakerUuid: uuid,
					speakerStyle: style[uuid].id,
				});
				await handlePlayVoice({ uuid: uuid });
				await handleFetchChats({ chatRoomId: chatRoomId });
			}, 2000);
		} else if (selectedContent === 'noSelected') {
			return;
		}
	};

	return {
		chatRooms,
		setChatRooms,
		text,
		setText,
		isSending,
		setIsSending,
		handleGetChatRooms,
		handleGetChats,
		handleFetchChats,
		handleCreateChatRoom,
		handleAddUserChat,
		handleAddAIChat,
		handleGetSpeakerUuidBySelectedItem,
		handleSetText,
		handleSetChat,
		handleKeyDown,
		handeSendText,
		chat,
		setChat,
	};
};
