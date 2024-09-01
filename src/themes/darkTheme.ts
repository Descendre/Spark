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
				header: {
					bg: '#0d1318',
					disabled: '#333333',
				},
				leftBar: {
					bg: '#090c10',
				},
				leftDrawer: {
					bg: '#0d1318',
				},
				footer: {
					inputBar: '#161f28',
				},
				customModal: {
					bg: '#0d1318',
				},
				line: {
					main: '#525f6c',
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
		content: {
			character: {
				userChatBox: {
					bg: '#283848',
				},
			},
			call: {
				bg: '#000000',
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
