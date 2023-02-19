import { createTheme, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import react from 'react'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {main: '#7FFF00'},
	
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 25,
				}
			}
		}
	},
	typography:{
		button: {
			fontSize: '1rem',
		}
	},
})

export default theme