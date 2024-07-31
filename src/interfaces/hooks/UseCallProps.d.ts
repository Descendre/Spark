export interface UseCallProps {
	listening: boolean;
	handleNewCallStart: () => Promise<void>;
	handleCallStart: () => void;
	handleCallEnd: () => void;
	handleCallPlay: () => void;
	handleCallPause: () => void;
	handleTranscriptSend: ({
		uuid,
		chatRoomId,
	}: HandleTranscriptSendProps) => Promise<void>;
}

export interface HandleTranscriptSendProps {
	uuid: string;
	chatRoomId: string;
}
