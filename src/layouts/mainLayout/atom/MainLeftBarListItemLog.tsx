'use client';
import { useCharacter, useLayout, usePalette } from '@/hooks';
import { LeftBarListItemLogProps } from '@/interfaces';
import { findCharacterByUUID, formatDate } from '@/utils';
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Skeleton,
} from '@mui/material';

export const MainLeftBarListItemLog = ({
	roomId,
	roomName,
	speakerUuid,
	createdAt,
}: LeftBarListItemLogProps) => {
	const { characters, characterDetails } = useCharacter();
	const { selectedCharacterUuid } = useLayout();
	const palette = usePalette();
	const currentCharacter = findCharacterByUUID({
		array: characters,
		uuid: speakerUuid,
	});
	const isSelected: boolean = selectedCharacterUuid === speakerUuid;

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
					// handleCharacterSelect({ uuid: uuid });
				}}
			>
				<ListItemAvatar>
					{currentCharacter ? (
						<Avatar src={characterDetails[speakerUuid]?.style_infos[0].icon} />
					) : (
						<Skeleton variant="circular" width={30} height={30} />
					)}
				</ListItemAvatar>
				<ListItemText
					primary={roomName}
					secondary={`${currentCharacter?.name} ${formatDate(createdAt)}`}
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
