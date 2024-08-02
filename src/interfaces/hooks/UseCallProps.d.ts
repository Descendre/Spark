export interface UseCallProps {
	listening: boolean;
	transcript: string;
	handleNewCallStart: () => Promise<void>;
	handleCallStart: () => Promise<void>;
	handleCallEnd: () => Promise<void>;
	handleCallPlay: () => Promise<void>;
	handleCallPause: () => Promise<void>;
	handleTranscriptSend: ({
		uuid,
		chatRoomId,
	}: HandleTranscriptSendProps) => Promise<void>;
}

export interface HandleTranscriptSendProps {
	uuid: string;
	chatRoomId: string;
}
