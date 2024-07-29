'use client';
import { useCharacter, useLayout, usePalette } from '@/hooks';
import { LeftBarListItemProps } from '@/interfaces';
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';

export const MainLeftBarListItem = ({ index, uuid }: LeftBarListItemProps) => {
	const { characters, characterDetails } = useCharacter();
	const { selectedCharacterUuid, handleCharacterSelect } = useLayout();
	const palette = usePalette();
	const isSelected: boolean = selectedCharacterUuid === uuid;

	return (
		<>
			<ListItemButton
				sx={{
					cursor: 'pointer',
					height: '70px',
					borderRadius: '10px',
					background: isSelected
						? `linear-gradient(to right, rgba(${palette.layout.mainLayout.selectedCharacterBg.primary}), rgba(${palette.layout.mainLayout.selectedCharacterBg.secondary}))`
						: 'transparent',
					'&:hover': {
						background: isSelected
							? `linear-gradient(to right, rgba(${palette.layout.mainLayout.selectedCharacterBg.primary}), rgba(${palette.layout.mainLayout.selectedCharacterBg.secondary}))`
							: `linear-gradient(to right, rgba(${palette.layout.mainLayout.hoverCharacterBg.primary}), rgba(${palette.layout.mainLayout.hoverCharacterBg.secondary}))`,
					},
					'.MuiTouchRipple-child': {
						color: 'transparent',
					},
				}}
				onClick={() => {
					handleCharacterSelect({ uuid: uuid });
				}}
			>
				<ListItemAvatar>
					<Avatar src={characterDetails[uuid]?.style_infos[0].icon} />
				</ListItemAvatar>
				<ListItemText
					primary={
						characters && characters[index] ? characters[index].name : ''
					}
					secondary={
						characters && characters[index]
							? characters[index].styles.map((style) => style.name).join('・')
							: ''
					}
					primaryTypographyProps={{
						sx: {
							textOverflow: 'ellipsis',
							overflow: 'hidden',
							whiteSpace: 'nowrap',
						},
					}}
					secondaryTypographyProps={{
						sx: {
							textOverflow: 'ellipsis',
							overflow: 'hidden',
							whiteSpace: 'nowrap',
							fontSize: '0.8rem',
						},
					}}
				/>
			</ListItemButton>
		</>
	);
};
