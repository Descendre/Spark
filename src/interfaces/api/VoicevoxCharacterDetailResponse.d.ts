export interface VoicevoxCharacterDetailResponse {
	policy: string;
	portrait: string;
	style_infos: StyleInfoProps[];
}

export interface StyleInfoProps {
	id: number;
	icon: string;
	portrait: string;
	voice_samples: string[];
}
