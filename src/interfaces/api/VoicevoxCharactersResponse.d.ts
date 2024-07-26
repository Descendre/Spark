export type VoicevoxSpeakersResponse = SpeakerProps[];

export interface SpeakerProps {
	name: string;
	speaker_uuid: string;
	styles: StyleProps[];
	version: string;
	supported_features: SupportedFeaturesProps;
}

export interface StyleProps {
	name: string;
	id: number;
	type: string;
}

export interface SupportedFeaturesProps {
	permitted_synthesis_morphing: string;
}
