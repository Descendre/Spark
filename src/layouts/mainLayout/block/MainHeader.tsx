import { Box } from '@mui/material';

export const MainHeader = () => {
	return (
		<>
			<Box
				position="fixed"
				top={0}
				left={0}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="60px"
				padding="10px 0"
				bgcolor="#aff"
			></Box>

			<Box width="100%" height="60px" />
		</>
	);
};
