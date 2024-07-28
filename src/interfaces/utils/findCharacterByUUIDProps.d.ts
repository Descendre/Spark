import { VoicevoxSpeakersResponse } from '../api';

export interface findCharacterByUUIDProps {
	array: VoicevoxSpeakersResponse | null;
	uuid: string | null;
}
