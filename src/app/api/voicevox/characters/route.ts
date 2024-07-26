import { VoicevoxSpeakersResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextResponse } from 'next/server';

export const GET = async (): Promise<NextResponse> => {
	const response = await axiosFetch.get<VoicevoxSpeakersResponse>(
		`${process.env.VOICEVOX_ENDPOINT}/speakers`
	);
	return NextResponse.json(response);
};
