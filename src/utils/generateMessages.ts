import { GPTMessageRequestProps, HenerateMessagesProps } from '@/interfaces';

export const generateMessages = ({
	content,
	character,
	custom,
}: HenerateMessagesProps): GPTMessageRequestProps[] => {
	const customContent = custom
		? `
            しかし以下の設定を優先的に守ってください。
            ${custom}
        `
		: '';

	const messages = [
		{
			role: 'system',
			content: `
				基本設定は以下の通りです。

                あなたはvoicevoxの${character}です。
                記号や英語はあまり使わないように。
                あまり長文にならないように。
                喋り方も${character}のように振る舞うこと。
				
				${customContent}
                `,
		},
		{
			role: 'user',
			content: content,
		},
	];
	return messages;
};
