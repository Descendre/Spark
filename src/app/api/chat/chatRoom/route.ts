import { ChatRoomsResponse, ChatNewRoomResponse } from '@/interfaces';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/libs';

export const GET = async (): Promise<NextResponse> => {
	try {
		const allChatRoom: ChatRoomsResponse = await prisma.chatRoom.findMany();
		return NextResponse.json(allChatRoom);
	} catch (error) {
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
		return NextResponse.json(error);
	}
};
