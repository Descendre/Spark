import { ChatNewRoomResponse, ChatRoomsResponse } from '@/interfaces';
import { prisma } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (): Promise<NextResponse> => {
	try {
		const allChatRooms: ChatRoomsResponse = await prisma.chatRoom.findMany({
			orderBy: { createdAt: 'desc' },
		});
		return NextResponse.json(allChatRooms);
	} catch (error) {
		console.error('Error fetching ChatRoom:', error);
		return NextResponse.json(error);
	}
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const body = await req.json();
		const { roomName, speakerUuid } = body;
		const newChatRoom: ChatNewRoomResponse = await prisma.chatRoom.create({
			data: {
				roomName: roomName,
				speakerUuid: speakerUuid,
			},
		});
		return NextResponse.json(newChatRoom);
	} catch (error) {
		console.error('Error creating ChatRoom:', error);
		return NextResponse.json(error);
	}
};
