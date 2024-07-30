'use client';
import {
	ChatNewRoomResponse,
	ChatRoomsResponse,
	HandeSendTextProps,
	HandleCreateChatRoomProps,
	HandleKeyDownProps,
	HandleSetTextProps,
	UseChatProps,
	VoicevoxAudioQueryResponse,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useChat = (): UseChatProps => {
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

	const handleCreateChatRoom = async ({
		roomName,
		speakerUuid,
	}: HandleCreateChatRoomProps): Promise<void> => {
		const newRoomResponse = await axiosFetch.post<ChatNewRoomResponse>(
			`/api/chat/chatRoom`,
			{
				roomName: roomName,
				speakerUuid: speakerUuid,
			}
		);
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

	const handleKeyDown = ({ event, uuid }: HandleKeyDownProps): void => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			handeSendText({ uuid: uuid });
		}
	};

	const handeSendText = async ({ uuid }: HandeSendTextProps): Promise<void> => {
		if (isSending || !uuid || text[uuid].length === 0) return;
		setIsSending(true);
		setText((prevText) => ({
			...prevText,
			[uuid]: '',
		}));

		if (selectedContent === 'character') {
			handleCreateChatRoom({
				roomName: 'test room name',
				speakerUuid: uuid,
			});
		}

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

	return {
		chatRooms,
		setChatRooms,
		text,
		setText,
		isSending,
		setIsSending,
		handleGetChatRooms,
		handleCreateChatRoom,
		handleGetSpeakerUuidBySelectedItem,
		handleSetText,
		handleKeyDown,
		handeSendText,
	};
};
