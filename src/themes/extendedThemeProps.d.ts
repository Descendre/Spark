import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			primary: string;
			line: string;
		};
	}
	interface PaletteOptions {
		layout: {
			primary: string;
			line: string;
		};
	}
}
