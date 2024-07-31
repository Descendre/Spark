import { axiosFetch } from '@/libs';
import { NextResponse, NextRequest } from 'next/server';
import { ChatGPTResponse } from '@/interfaces';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	const body = await req.json();
	const { model, messages } = body;
	const response = await axiosFetch.post<ChatGPTResponse>(
		'https://api.openai.com/v1/chat/completions',
		{
			model: model,
			messages: messages,
			max_tokens: 500,
		},
		{
			Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
		}
	);
	return NextResponse.json(response);
};
