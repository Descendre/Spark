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
	customText: string | null;
	setCustomText: React.Dispatch<React.SetStateAction<string | null>>;
	isCustom: boolean;
	setIsCustom: React.Dispatch<React.SetStateAction<boolean>>;
	handleGetCharacters: () => Promise<void>;
	handleSetCharacterStyle: ({ index }: HandleSetCharacterStyleProps) => void;
	handleSetCustomText: ({ text: string }) => void;
}

export interface HandleGetCharacterDetailProps {
	characterUuid: string;
}

export interface HandleSetCharacterStyleProps {
	index: number;
	speakerUuid: string | undefined;
}
