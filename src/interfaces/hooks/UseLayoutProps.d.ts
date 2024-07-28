import { SelectedContentProps } from '../provider';

export interface UseLayoutProps {
	selectedContent: SelectedContentProps;
	setSelectedContent: React.Dispatch<
		React.SetStateAction<SelectedContentProps>
	>;
	selectedCharacterUuid: string | null;
	setSelectedCharacterUuid: React.Dispatch<React.SetStateAction<string | null>>;
	handleCharacterSelect: ({ uuid }: HandleCharacterSelectProps) => void;
}

export interface HandleCharacterSelectProps {
	uuid: string;
}
