import { NextRequest, NextResponse } from 'next/server';
import { axiosFetch } from '../../../../../libs';
import fs from 'fs';
import path from 'path';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	const body = await req.json();
	const { audioQueryResponse, speaker } = body;

	const fileName = `${Date.now()}.wav`;
	const filePath = path.join(process.cwd(), 'public', fileName);

	const response = await axiosFetch.post<ArrayBuffer>(
		`${process.env.VOICEVOX_ENDPOINT}/synthesis?speaker=${speaker}`,
		audioQueryResponse,
		undefined,
		{
			responseType: 'arraybuffer',
		}
	);

	fs.writeFileSync(filePath, Buffer.from(response));
	const audioFile = `/${fileName}`;

	return NextResponse.json(audioFile);
};

export const DELETE = async (req: NextRequest): Promise<NextResponse> => {
	const body = await req.json();
	const { fileName } = body;
	const filePath = path.join(process.cwd(), 'public', fileName);

	try {
		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
			return NextResponse.json({ message: 'File deleted successfully' });
		} else {
			return NextResponse.json({ message: 'File not found' }, { status: 404 });
		}
	} catch (error) {
		console.error('Error deleting file:', error);
		return NextResponse.json(
			{ message: 'Error deleting file' },
			{ status: 500 }
		);
	}
};
