import { Button as MuiButton, Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

interface ButtonOperatorProps {
	selectedOperation: string;
	operation: string;
	selectOperation: (value: string) => void;
}

const Button = styled(MuiButton)<{ selected: boolean }>((props) => ({ borderColor: props.selected ? '#fff' : 'rgba(127,255,0, 0.5)', }))

export const ButtonOperatorGrid = ({ selectedOperation, operation, selectOperation }: ButtonOperatorProps) => {
	return (
		<Grid item xs={3}>
			<Button fullWidth
				variant="outlined"
				sx={{ backgroundColor: 'rgba(127,255,0, 0.5)' }}
				onClick={() => selectOperation(operation)}
				selected={selectedOperation === operation}
			>
				{operation}
			</Button>
		</Grid>
	)
}
