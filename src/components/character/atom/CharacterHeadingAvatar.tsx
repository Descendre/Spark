import { useEffect, useState } from 'react';
import { Avatar, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { findCharacterByUUID } from '@/utils';
import { useCharacter, useLayout } from '@/hooks';
import { SpeakerProps } from '@/interfaces';

export const CharacterHeadingAvatar = () => {
	const [currentCharacter, setCurrentCharacter] = useState<
		SpeakerProps | undefined
	>(undefined);
	const { selectedCharacterUuid, handleCharacterSelect } = useLayout();
	const { characters, characterDetails } = useCharacter();

	useEffect(() => {
		const currentCharacter = findCharacterByUUID({
			array: characters,
			uuid: selectedCharacterUuid,
		});
		setCurrentCharacter(currentCharacter);
	}, [selectedCharacterUuid]);

	const handleSelectChange = (event: SelectChangeEvent<string>) => {
		const selectedName = event.target.value;
		const selectedChar = characters?.find(
			(char) => `${char.name}` === selectedName
		);
		if (selectedChar) {
			handleCharacterSelect({ uuid: selectedChar.speaker_uuid });
		}
	};

	return (
		<Select
			size="small"
			color="primary"
			value={currentCharacter ? `${currentCharacter.name}` : ''}
			onChange={handleSelectChange}
			displayEmpty
			renderValue={(selected) => {
				return (
					<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
						<Avatar
							src={
								characterDetails[selectedCharacterUuid || '']?.style_infos[0]
									.icon
							}
						/>
						{selected}
					</div>
				);
			}}
		>
			{characters?.map((char) => (
				<MenuItem
					key={char.speaker_uuid}
					value={`${char.name}`}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: '20px',
					}}
				>
					<Avatar
						src={characterDetails[char.speaker_uuid]?.style_infos[0].icon}
					/>
					{`${char.name}`}
				</MenuItem>
			))}
		</Select>
	);
};
