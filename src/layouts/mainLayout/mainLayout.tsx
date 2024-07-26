import { MainLayoutProps } from '@/interfaces';
import { MainHeader } from './block';

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<MainHeader />
			{children}
		</>
	);
};
