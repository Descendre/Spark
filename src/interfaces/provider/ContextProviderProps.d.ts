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
	isLeftBar: boolean;
	setIsLeftBar: React.Dispatch<React.SetStateAction<boolean>>;
	isLeftDrawer: boolean;
	setIsLeftDrawer: React.Dispatch<React.SetStateAction<boolean>>;
	isLogSelect: boolean;
	setIsLogSelect: React.Dispatch<React.SetStateAction<boolean>>;
	text: { [uuid: string]: string };
	setText: React.Dispatch<React.SetStateAction<{ [uuid: string]: string }>>;
	style: { [uuid: string]: characterStyleProps };
	setStyle: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: characterStyleProps }>
	>;
}

export type SelectedContentProps = 'noSelected' | 'character';

export interface characterStyleProps {
	name: string;
	id: number;
	type: string;
}
