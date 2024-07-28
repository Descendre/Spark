import { CharacterHeadingAvatarPopperProps } from '@/interfaces';
import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Popper,
} from '@mui/material';
import React from 'react';

export const CharacterHeadingAvatarPopper = ({
	open,
	anchorEl,
}: CharacterHeadingAvatarPopperProps) => {
	return (
		<Popper
			open={open}
			placement="bottom"
			anchorEl={anchorEl}
			style={{ zIndex: 200 }}
		>
			<Paper>
				<List>
					<ListItem>
						<ListItemAvatar>
							<Avatar />
						</ListItemAvatar>
					</ListItem>
					<ListItemText primary="aaaaaaaaaaaaaaaaaaa" />
				</List>
			</Paper>
		</Popper>
	);
};
