'use client';
import { hexToRgba } from '@/utils';
import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: purple['A700'],
		},
		layout: {
			mainLayout: {
				header: '#0d1318',
				leftBar: '#090c10',
				leftDrawer: '#0d1318',
				line: {
					main: '#333333',
					sub: '#283848',
				},
				selectedCharacterBg: {
					primary: `${hexToRgba('#79197C')}, 0.5`,
					secondary: `${hexToRgba('#00E5FF')}, 0.5`,
				},
				hoverCharacterBg: {
					primary: `${hexToRgba('#79197C')}, 0.2`,
					secondary: `${hexToRgba('#00E5FF')}, 0.2`,
				},
			},
		},
		component: {
			footer: {
				inputBar: '#161f28',
			},
		},
		background: {
			default: '#0d1318',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
            ::-webkit-scrollbar{
                width: 10px;
				max-width: 2vw;
            },
            ::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.3);
				border-radius: 5px;
            },
            ::-webkit-scrollbar-track {
                background-color: transparent;
            }
            `,
		},
	},
});
