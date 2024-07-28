'use client';
import { findCharacterByUUIDProps, SpeakerProps } from '@/interfaces';

export const findCharacterByUUID = ({
	array,
	uuid,
}: findCharacterByUUIDProps): SpeakerProps | undefined => {
	return array?.find((element) => element.speaker_uuid === uuid);
};
