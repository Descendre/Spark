import {
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '../api';

export interface ContextProviderProps {
	characters: VoicevoxSpeakersResponse | null;
	setCharacters: React.Dispatch<
		React.SetStateAction<VoicevoxSpeakersResponse | null>
	>;
	characterDetails: { [uuid: string]: VoicevoxCharacterDetailResponse };
	setCharacterDetails: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: VoicevoxCharacterDetailResponse }>
	>;
	selectedContent: SelectedContentProps;
	setSelectedContent: React.Dispatch<
		React.SetStateAction<SelectedContentProps>
	>;
	selectedCharacterUuid: string | null;
	setSelectedCharacterUuid: React.Dispatch<React.SetStateAction<string | null>>;
}

export type SelectedContentProps = 'noSelected' | 'character';
