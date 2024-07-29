export interface VoicevoxAudioQueryResponse {
	accent_phrases: AccentPhraseProps[];
	speedScale: number;
	pitchScale: number;
	intonationScale: number;
	volumeScale: number;
	prePhonemeLength: number;
	postPhonemeLength: number;
	pauseLength: number;
	pauseLengthScale: number;
	outputSamplingRate: number;
	outputStereo: boolean;
	kana: string;
}

interface AccentPhraseProps {
	moras: MoraProps[];
	accent: number;
	pause_mora?: MoraProps;
	is_interrogative: boolean;
}

interface MoraProps {
	text: string;
	consonant?: string;
	consonant_length?: number;
	vowel: string;
	vowel_length: number;
	pitch: number;
}
