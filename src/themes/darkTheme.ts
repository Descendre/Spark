'use client';
import { hexToRgba } from '@/utils';
import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
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
                background-color: #79197C;
				border-radius: 5px;
            },
            ::-webkit-scrollbar-track {
                background-color: transparent;
            }
            `,
		},
	},
});
