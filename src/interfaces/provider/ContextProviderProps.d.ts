import { VoicevoxSpeakersResponse } from '../api';

export interface ContextProviderProps {
	characters: VoicevoxSpeakersResponse | null;
	setCharacters: React.Dispatch<
		React.SetStateAction<VoicevoxSpeakersResponse | null>
	>;
}
