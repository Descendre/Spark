'use client';
import { useBreakPoint, useLayout, usePalette } from '@/hooks';
import { Grow, Modal, Paper } from '@mui/material';
import { MainCustomModalBody, MainCustomModalHeader } from '../atom';

export const MainCustomModal = () => {
	const breakpoint = useBreakPoint();
	const palette = usePalette();
	const { isCustomModal, setIsCustomModal } = useLayout();

	return (
		<Modal
			open={isCustomModal}
			onClose={() => setIsCustomModal(false)}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: ['xs', 'sm'].includes(breakpoint) ? 'center' : 'start',
			}}
		>
			<Grow in={isCustomModal} timeout={200}>
				<Paper
					sx={{
						position: 'relative',
						backgroundColor: palette.layout.mainLayout.customModal.bg,
						width: ['xs', 'sm'].includes(breakpoint) ? '100vw' : '800px',
						height: ['xs', 'sm'].includes(breakpoint)
							? '100vh'
							: 'calc(100vh - 90px)',
						maxHeight: '800px',
						marginTop: ['xs', 'sm'].includes(breakpoint) ? '0px' : '60px',
						borderRadius: ['xs', 'sm'].includes(breakpoint) ? '0px' : '10px',
						overflow: 'hidden',
					}}
				>
					<MainCustomModalHeader />
					<MainCustomModalBody />
				</Paper>
			</Grow>
		</Modal>
	);
};
