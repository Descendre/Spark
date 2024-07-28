import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			primary: string;
			line: string;
			selectedCharacterBg: {
				primary: string;
				secondary: string;
			};
			hoverCharacterBg: {
				primary: string;
				secondary: string;
			};
		};
	}
	interface PaletteOptions {
		layout: {
			primary: string;
			line: string;
			selectedCharacterBg: {
				primary: string;
				secondary: string;
			};
			hoverCharacterBg: {
				primary: string;
				secondary: string;
			};
		};
	}
}
