'use client';
import { useCharacter, useLayout } from '@/hooks';
import { CharacterStyleHeaderChipProps } from '@/interfaces';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Avatar, Chip } from '@mui/material';
import React from 'react';

export const CharacterStyleHeaderChip = ({
	url,
	label,
	id,
	index,
}: CharacterStyleHeaderChipProps) => {
	const { selectedCharacterUuid } = useLayout();
	const { style, handleSetCharacterStyle } = useCharacter();
	const isSelected: boolean = style[selectedCharacterUuid || ''].id === id;

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
			onClick={() => handleSetCharacterStyle({ index: index })}
			sx={{
				cursor: 'pointer',
			}}
		/>
	);
};
