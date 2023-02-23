import { Button, Grid } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useMemo } from 'react'

interface ButtonDigitProps {
  value: string
  enterValue: (value: string) => void
  xs?: number
}
export const ButtonDigitGrid = ({
	value,
	enterValue,
	xs = 3,
}: ButtonDigitProps) => {
	//const exemplo = useCallback(()=>{}, [])
	//const exemplo1 = useMemo(()=>{}, [])

	return (
		<Grid item xs={xs}>
			<Button fullWidth variant="outlined" onClick={() => enterValue(value)}>
				{value}
			</Button>
		</Grid>
	)
}
