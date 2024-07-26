import { ReactNode } from 'react';

export interface MainLayoutProps {
	children: ReactNode;
}

export interface LeftBarListItemProps {
	index: number;
	uuid: string;
}
