export interface UseCallProps {
	handleNewCallStart: () => Promise<void>;
	handleCallEnd: () => void;
}
