import { VoicevoxCharacterDetailResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
	req: NextRequest,
	{ params }: { params: { characterUuid: string } }
): Promise<NextResponse> => {
	const characterUuid = params.characterUuid;
	const response = await axiosFetch.get<VoicevoxCharacterDetailResponse>(
		`${process.env.VOICEVOX_ENDPOINT}/speaker_info?speaker_uuid=${characterUuid}&resource_format=url`
	);
	return NextResponse.json(response);
};
