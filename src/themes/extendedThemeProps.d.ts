import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			mainLayout: {
				header: {
					bg: string;
					disabled: string;
				};
				leftBar: {
					bg: string;
				};
				leftDrawer: {
					bg: string;
				};
				footer: {
					inputBar: string;
				};
				customModal: {
					bg: string;
				};
				line: {
					main: string;
					sub: string;
				};
				selectedCharacterBg: {
					primary: string;
					secondary: string;
				};
				hoverCharacterBg: {
					primary: string;
					secondary: string;
				};
			};
		};
		content: {
			character: {
				userChatBox: {
					bg: string;
				};
			};
			call: {
				bg: string;
			};
		};
	}
	interface PaletteOptions {
		layout: {
			mainLayout: {
				header: {
					bg: string;
					disabled: string;
				};
				leftBar: {
					bg: string;
				};
				leftDrawer: {
					bg: string;
				};
				footer: {
					inputBar: string;
				};
				customModal: {
					bg: string;
				};
				line: {
					main: string;
					sub: string;
				};
				selectedCharacterBg: {
					primary: string;
					secondary: string;
				};
				hoverCharacterBg: {
					primary: string;
					secondary: string;
				};
			};
		};
		content: {
			character: {
				userChatBox: {
					bg: string;
				};
			};
			call: {
				bg: string;
			};
		};
	}
}
