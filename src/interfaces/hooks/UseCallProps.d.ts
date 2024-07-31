export interface UseCallProps {
	listening: boolean;
	handleNewCallStart: () => Promise<void>;
	handleCallStart: () => void;
	handleCallEnd: () => void;
	handleCallPlay: () => void;
	handleCallPause: () => void;
}
