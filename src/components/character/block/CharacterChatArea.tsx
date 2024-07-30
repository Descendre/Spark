import { Box } from '@mui/material';
import { CharacterAIChatBox, CharacterUserChatBox } from '../atom';

export const CharacterChatArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="start"
			alignItems="center"
			flexDirection="column"
			gap="30px"
			width="90%"
			height="1000px"
			maxWidth="1000px"
			padding="100px 0"
			margin="0 auto"
		>
			<CharacterUserChatBox text="aaaaaaaaaaaa" />
			<CharacterAIChatBox
				text="くのブラウザでサポートされていますが、特定のブラウザやバージョンではサポートされていない可能性もあります。"
				styleName="amaama"
			/>
		</Box>
	);
};
