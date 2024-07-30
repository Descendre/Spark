export type ChatsResponse = ChatProps[];

export interface ChatProps {
	chatRoomId: string;
	content: string;
	createdAt: Date;
	id: number;
	speakerStyle: number;
	speakerType: 'AI' | 'USER';
	speakerUuid: string;
}
