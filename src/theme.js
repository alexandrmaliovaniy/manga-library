import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// light?: string;
// main: string;
// dark?: string;
// contrastText?: string;

// Create a theme instance.
const theme = createTheme({
    palette: {
        background: {
            default: '#1d202b'
        },
        primary: {
            main: '#1d202b',
            contrastText: '#2d323c',
        },
        secondary: {
            main: '#2a2d37',
            contrastText: '#4d4f5a',
        },
        info: {
            main: '#21263c',
            contrastText: '#6c99d6'
        },
        error: {
            main: '#302831',
            contrastText: '#e85f6e'
        },
        success: {
            main: '#223333',
            contrastText: '#42b65f'
        },
        orange: {
            main: '#f9784b',
            contrastText: '#ce552a',
        }
    },
});

export default theme;