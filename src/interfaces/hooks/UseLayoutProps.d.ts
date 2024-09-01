import { SelectedContentProps } from '../provider';

export interface UseLayoutProps {
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
	handleCharacterSelect: ({ uuid }: HandleCharacterSelectProps) => void;
	handleLogSelect: ({ chatRoomId }: HandleLogSelectProps) => void;
	isCustomModal: boolean;
	setIsCustomModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HandleCharacterSelectProps {
	uuid: string;
}

export interface HandleLogSelectProps {
	chatRoomId: string;
}
