import {
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '../api';
import { characterStyleProps } from '../provider';

export interface UseCharacterProps {
	characters: VoicevoxSpeakersResponse | null;
	setCharacters: React.Dispatch<
		React.SetStateAction<VoicevoxSpeakersResponse | null>
	>;
	characterDetails: { [uuid: string]: VoicevoxCharacterDetailResponse };
	setCharacterDetails: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: VoicevoxCharacterDetailResponse }>
	>;
	style: { [uuid: string]: characterStyleProps };
	setStyle: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: characterStyleProps }>
	>;
	handleGetCharacters: () => Promise<void>;
	handleSetCharacterStyle: ({ index }: HandleSetCharacterStyleProps) => void;
}

export interface HandleGetCharacterDetailProps {
	characterUuid: string;
}

export interface HandleSetCharacterStyleProps {
	index: number;
}
