'use client';
import { Box } from '@mui/material';
import {
	CharacterCallExample,
	CharacterIcon,
	CharacterTextExample,
} from '../atom';
import { useBreakPoint, useCharacter, useLayout } from '@/hooks';
import { findCharacterByUUID } from '@/utils';
import { Settings } from '@mui/icons-material';

export const CharacterDisplay = () => {
	const breakpoint = useBreakPoint();
	const { selectedItem } = useLayout();
	const { characters, characterDetails } = useCharacter();
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: selectedItem,
	});

	return (
		<Box
			display="flex"
			justifyContent="start"
			alignItems="center"
			flexDirection="column"
			gap="30px"
			width={['xs', 'sm'].includes(breakpoint) ? '95%' : '90%'}
			maxWidth="1000px"
			paddingTop="75px"
			margin="0 auto"
		>
			<CharacterIcon
				url={characterDetails[selectedItem || '']?.style_infos[0].icon}
				name={currentCharacter?.name}
			/>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexWrap="wrap"
				gap="15px"
				width={['xs', 'sm'].includes(breakpoint) ? '95%' : '80%'}
				margin="0 auto"
			>
				<CharacterCallExample
					text={`${currentCharacter?.name}と通話を開始する`}
				/>
				<CharacterTextExample icon={<Settings />} text="HAL名古屋とは？" />
				<CharacterTextExample icon={<Settings />} text="French Coreとは？" />
				<CharacterTextExample
					icon={<Settings />}
					text="この夏ぴったりのスタミナ食について教えてください"
				/>
				<CharacterTextExample icon={<Settings />} text="眠れないなぁ。。。" />
				<CharacterTextExample icon={<Settings />} text="こんにちは！" />
			</Box>
		</Box>
	);
};
