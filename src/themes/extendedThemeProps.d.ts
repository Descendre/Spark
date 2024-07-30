import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			mainLayout: {
				header: {
					bg: string;
					callStart: string;
					callEnd: string;
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
		};
	}
	interface PaletteOptions {
		layout: {
			mainLayout: {
				header: {
					bg: string;
					callStart: string;
					callEnd: string;
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
		};
	}
}
