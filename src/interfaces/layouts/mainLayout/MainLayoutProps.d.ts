import { ReactNode } from 'react';

export interface MainLayoutProps {
	children: ReactNode;
}

export interface LeftBarListItemProps {
	index: number;
	uuid: string;
}

export interface LeftBarListItemLogProps {
	roomId: string;
	roomName: string;
	speakerUuid: string;
	createdAt: Date;
}
