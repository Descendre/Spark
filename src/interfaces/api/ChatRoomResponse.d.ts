export interface ChatNewRoomResponse {
	id: string;
	createdAt: Date;
}

interface ChatRoomProps {
	id: string;
	roomName: string;
	speakerUuid: string;
	createdAt: Date;
}

export type ChatRoomsResponse = ChatRoomProps[];
