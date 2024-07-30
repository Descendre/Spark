export interface ChatNewRoomResponse {
	id: string;
	createdAt: Date;
	updatedAt: Date;
}

interface ChatRoomProps {
	id: string;
	roomName: string;
	characterID: string;
	createdAt: Date;
	updatedAt: Date;
}

export type ChatRoomsResponse = ChatRoomProps[];
