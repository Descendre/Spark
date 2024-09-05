export interface HenerateMessagesProps {
	content: string;
	character: string;
	custom?: string | null;
}

export interface GPTMessageRequestProps {
	role: string;
	content: string;
}
