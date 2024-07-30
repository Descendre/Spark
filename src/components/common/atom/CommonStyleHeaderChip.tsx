'use client';
import { useCharacter } from '@/hooks';
import { CommonStyleHeaderChipProps } from '@/interfaces';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Avatar, Chip } from '@mui/material';
import React from 'react';

export const CommonStyleHeaderChip = ({
	url,
	label,
	id,
	index,
	speakerUuid,
}: CommonStyleHeaderChipProps) => {
	const { style, handleSetCharacterStyle } = useCharacter();
	const isSelected: boolean = style[speakerUuid || '']?.id === id;

	return (
		<Chip
			variant="outlined"
			color={isSelected ? 'primary' : 'default'}
			avatar={<Avatar src={url} />}
			label={label}
			deleteIcon={
				isSelected ? <RadioButtonChecked /> : <RadioButtonUnchecked />
			}
			onDelete={() => {}}
			onClick={() =>
				handleSetCharacterStyle({ index: index, speakerUuid: speakerUuid })
			}
			sx={{
				cursor: 'pointer',
			}}
		/>
	);
};
