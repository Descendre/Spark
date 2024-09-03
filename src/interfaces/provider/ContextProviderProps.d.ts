import {
	ChatRoomsResponse,
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '../api';

export interface ContextProviderProps {
	characters: VoicevoxSpeakersResponse | null;
	setCharacters: React.Dispatch<
		React.SetStateAction<VoicevoxSpeakersResponse | null>
	>;
	chatRooms: ChatRoomsResponse | null;
	setChatRooms: React.Dispatch<React.SetStateAction<ChatRoomsResponse | null>>;
	characterDetails: { [uuid: string]: VoicevoxCharacterDetailResponse };
	setCharacterDetails: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: VoicevoxCharacterDetailResponse }>
	>;
	selectedContent: SelectedContentProps;
	setSelectedContent: React.Dispatch<
		React.SetStateAction<SelectedContentProps>
	>;
	selectedItem: string | null;
	setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
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
	isSending: boolean;
	setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
	chat: { [uuid: string]: ChatsResponse };
	setChat: React.Dispatch<
		React.SetStateAction<{ [uuid: string]: ChatsResponse }>
	>;
	isCustomModal: boolean;
	setIsCustomModal: React.Dispatch<React.SetStateAction<boolean>>;
	customText: string | null;
	setCustomText: React.Dispatch<React.SetStateAction<string | null>>;
	isCustom: boolean;
	setIsCustom: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SelectedContentProps = 'noSelected' | 'character' | 'log' | 'call';

export interface characterStyleProps {
	name: string;
	id: number;
	type: string;
}
