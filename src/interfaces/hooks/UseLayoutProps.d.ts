import { SelectedContentProps } from '../provider';

export interface UseLayoutProps {
	selectedContent: SelectedContentProps;
	setSelectedContent: React.Dispatch<
		React.SetStateAction<SelectedContentProps>
	>;
	selectedCharacterUuid: string | null;
	setSelectedCharacterUuid: React.Dispatch<React.SetStateAction<string | null>>;
	handleCharacterSelect: ({ uuid }: HandleCharacterSelectProps) => void;
	isLeftBar: boolean;
	setIsLeftBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HandleCharacterSelectProps {
	uuid: string;
}
