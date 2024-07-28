'use client';
import { hexToRgba } from '@/utils';
import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: blue[400],
		},
		layout: {
			primary: '#000000',
			line: '#333333',
			selectedCharacterBg: {
				primary: `${hexToRgba('#79197C')}, 0.5`,
				secondary: `${hexToRgba('#00E5FF')}, 0.5`,
			},
			hoverCharacterBg: {
				primary: `${hexToRgba('#79197C')}, 0.2`,
				secondary: `${hexToRgba('#00E5FF')}, 0.2`,
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
