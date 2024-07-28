import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			primary: string;
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
		component: {
			footer: {
				inputBar: string;
			};
		};
	}
	interface PaletteOptions {
		layout: {
			primary: string;
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
		component: {
			footer: {
				inputBar: string;
			};
		};
	}
}
