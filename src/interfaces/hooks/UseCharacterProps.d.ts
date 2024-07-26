import {
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '../api';

export interface UseCharacterProps {
	characters: VoicevoxSpeakersResponse | null;
	setCharacters: React.Dispatch<
		React.SetStateAction<VoicevoxSpeakersResponse | null>
	>;
	characterDetails: { [uuid: string]: VoicevoxCharacterDetailResponse };
	setCharacterDetails: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: VoicevoxCharacterDetailResponse }>
	>;
	handleGetCharacters: () => Promise<void>;
}

export interface HandleGetCharacterDetailProps {
	characterUuid: string;
}
