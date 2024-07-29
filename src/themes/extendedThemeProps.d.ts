import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			mainLayout: {
				header: string;
				leftBar: string;
				leftDrawer: string;
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
		component: {
			footer: {
				inputBar: string;
			};
		};
	}
	interface PaletteOptions {
		layout: {
			mainLayout: {
				header: string;
				leftBar: string;
				leftDrawer: string;
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
		component: {
			footer: {
				inputBar: string;
			};
		};
	}
}
