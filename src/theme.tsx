import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            light: '#3A3A3A',
            dark: '#121212',
            main: '#121212'
        },
        background:{
            default:"#121212"
        }
    },
    typography:{
        fontFamily:"'Montserrat', sans-serif",
        fontSize:16,
        fontWeightRegular:400,
        fontWeightBold:700,
        fontWeightMedium:500,
        
    }
});

export default theme;