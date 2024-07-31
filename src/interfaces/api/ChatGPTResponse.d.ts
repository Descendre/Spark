export interface ChatGPTResponse {
	id: string;
	object: string;
	created: number;
	model: string;
	choices: ChoiceProps[];
	usage: UsageProps;
}

interface ChoiceProps {
	index: number;
	message: MessageProps;
	finish_reason: string;
}

interface MessageProps {
	role: string;
	content: string;
}

interface UsageProps {
	prompt_tokens: number;
	completion_tokens: number;
	total_tokens: number;
}
