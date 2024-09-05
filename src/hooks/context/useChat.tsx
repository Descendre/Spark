'use client';
import {
	ChatNewRoomResponse,
	ChatRoomsResponse,
	ChatsResponse,
	HandleSendTextProps,
	HandleAddAIChatProps,
	HandleAddUserChatProps,
	HandleCreateChatRoomProps,
	HandleGetChatsProps,
	HandleKeyDownProps,
	HandlePlayVoiceProps,
	HandleSetChatProps,
	HandleSetTextProps,
	UseChatProps,
	VoicevoxAudioQueryResponse,
	ChatGPTResponse,
	HandleChatGPTProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { findCharacterByUUID, generateMessages } from '@/utils';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import 'regenerator-runtime';
import SpeechRecognition from 'react-speech-recognition';

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
		setIsLogSelect,
		setSelectedContent,
		characters,
		isCustom,
		customText,
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
		const response = await axiosFetch.get<ChatsResponse | 404>(
			`/api/chat/${chatRoomId}`
		);
		if (response === 404) {
			router.push('/');
			setSelectedContent('noSelected');
			setIsLogSelect(false);
			return;
		}
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

	const handleChatGPT = async ({
		messages,
		model,
	}: HandleChatGPTProps): Promise<ChatGPTResponse> => {
		const response = await axiosFetch.post<ChatGPTResponse>(`/api/chatGPT`, {
			model: model,
			messages: messages,
		});
		return response;
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
		content,
	}: HandlePlayVoiceProps): Promise<void> => {
		const audioQueryResponse =
			await axiosFetch.post<VoicevoxAudioQueryResponse>(
				`/api/voicevox/audio/audioQuery`,
				{
					text: content,
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
			if (selectedContent === 'call') {
				SpeechRecognition.startListening({ language: 'ja-JP' });
			}
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
			handleSendText({ content: value, chatRoomId: chatRoomId, uuid: uuid });
		}
	};

	const handleSendText = async ({
		uuid,
		content,
		chatRoomId,
	}: HandleSendTextProps): Promise<void> => {
		const currentCharacter = findCharacterByUUID({
			array: characters,
			uuid: uuid || '',
		});
		if (!currentCharacter || isSending || !uuid) return;
		setIsSending(true);
		setText((prevText) => ({
			...prevText,
			[uuid]: '',
		}));
		content = content.trim();

		const messages = generateMessages({
			content: content,
			character: currentCharacter.name,
			...(isCustom ? { custom: customText } : {}),
		});
		const chatGPTResponse = await handleChatGPT({
			model: 'gpt-4o-mini',
			messages: messages,
		});

		if (selectedContent === 'character') {
			const response = await handleCreateChatRoom({
				roomName: chatGPTResponse.choices[0].message.content.substring(0, 30),
				speakerUuid: uuid,
			});
			await handleGetChatRooms();
			handleSetChat({ chatRoomId: response.id, content: content });
			await handleAddUserChat({ content: content, chatRoomId: response.id });
			router.push(`/c/${response.id}`);
			await handleGetChats({ chatRoomId: response.id });

			await handleAddAIChat({
				content: chatGPTResponse.choices[0].message.content,
				chatRoomId: response.id,
				speakerUuid: uuid,
				speakerStyle: style[uuid].id,
			});
			await handlePlayVoice({
				content: chatGPTResponse.choices[0].message.content,
				uuid: uuid,
			});
			await handleGetChats({ chatRoomId: response.id });
		} else if (selectedContent === 'log' || selectedContent === 'call') {
			if (!chatRoomId) return;
			handleSetChat({ chatRoomId: chatRoomId, content: content });
			await handleAddUserChat({ content: content, chatRoomId: chatRoomId });
			await handleGetChats({ chatRoomId: chatRoomId });

			await handleAddAIChat({
				content: chatGPTResponse.choices[0].message.content,
				chatRoomId: chatRoomId,
				speakerUuid: uuid,
				speakerStyle: style[uuid].id,
			});
			await handlePlayVoice({
				content: chatGPTResponse.choices[0].message.content,
				uuid: uuid,
			});
			await handleGetChats({ chatRoomId: chatRoomId });
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
		handlePlayVoice,
		setIsSending,
		handleGetChatRooms,
		handleGetChats,
		handleCreateChatRoom,
		handleAddUserChat,
		handleAddAIChat,
		handleChatGPT,
		handleGetSpeakerUuidBySelectedItem,
		handleSetText,
		handleSetChat,
		handleKeyDown,
		handleSendText,
		chat,
		setChat,
	};
};
