export interface UseLayoutProps {
	selectedCharacterUuid: string | null;
	setSelectedCharacterUuid: React.Dispatch<React.SetStateAction<string | null>>;
	handleCharacterSelect: ({ uuid }: HandleCharacterSelectProps) => void;
}

export interface HandleCharacterSelectProps {
	uuid: string;
}
