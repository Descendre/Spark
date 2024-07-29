import { axiosFetch } from '@/libs';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	const body = await req.json();
	const { text, speaker } = body;
	const response = await axiosFetch.post(
		`${process.env.VOICEVOX_ENDPOINT}/audio_query?text=${text}&speaker=${speaker}`
	);
	return NextResponse.json(response);
};
