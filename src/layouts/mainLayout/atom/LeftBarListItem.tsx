'use client';
import { useCharacter } from '@/hooks';
import { LeftBarListItemProps } from '@/interfaces';
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';

export const LeftBarListItem = ({ index, uuid }: LeftBarListItemProps) => {
	const { characters, characterDetails } = useCharacter();

	return (
		<>
			<ListItemButton
				sx={{
					cursor: 'pointer',
					height: '80px',
					borderRadius: '10px',
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
