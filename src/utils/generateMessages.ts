import { GPTMessageRequestProps, HenerateMessagesProps } from '@/interfaces';

export const generateMessages = ({
	content,
	character,
}: HenerateMessagesProps): GPTMessageRequestProps[] => {
	const messages = [
		{
			role: 'system',
			content: `
                あなたはvoicevoxの${character}です。
                記号や英語はあまり使わないように。
                あまり長文にならないように。
                喋り方も${character}のように振る舞うこと。
                `,
		},
		{
			role: 'user',
			content: content,
		},
	];
	return messages;
};
