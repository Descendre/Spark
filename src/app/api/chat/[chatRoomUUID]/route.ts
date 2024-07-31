import { prisma } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
	req: NextRequest,
	{ params }: { params: { chatRoomUUID: string } }
): Promise<NextResponse> => {
	try {
		const chatRoomUUID = params.chatRoomUUID;

		const chatRoom = await prisma.chatRoom.findUnique({
			where: { id: chatRoomUUID },
		});
		if (!chatRoom) {
			return NextResponse.json(404);
		}

		const chats = await prisma.chat.findMany({
			where: { chatRoomId: chatRoomUUID },
			orderBy: { createdAt: 'asc' },
		});
		return NextResponse.json(chats);
	} catch (error) {
		console.error('Error getting Chat:', error);
		return NextResponse.json(error);
	}
};

export const POST = async (
	req: NextRequest,
	{ params }: { params: { chatRoomUUID: string } }
): Promise<NextResponse> => {
	try {
		const chatRoomUUID = params.chatRoomUUID;
		const body = await req.json();
		const { speakerType, speakerUuid, speakerStyle, content } = body;
		const newChat = await prisma.chat.create({
			data: {
				chatRoomId: chatRoomUUID,
				speakerType: speakerType,
				speakerUuid: speakerUuid ? speakerUuid : '',
				speakerStyle: speakerStyle ? speakerStyle : 0,
				content: content,
			},
		});
		return NextResponse.json(newChat);
	} catch (error) {
		console.error('Error creating Chat:', error);
		return NextResponse.json(error);
	}
};
