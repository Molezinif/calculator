import React, { useState, useCallback } from 'react'
import CalculatorBase from './components/Calculator/calculatorBase'
import CalculatorOutput from './components/Calculator/calculatorOutput'
import { Container, Grid, Button } from '@mui/material'
import { ButtonDigitGrid } from './components/Button/ButtonDigitGrid'
import { ButtonOperatorGrid } from './components/Button/ButtonOperatorGrid'
import { percentageCalculation, calculate } from './utilities/index'

function App() {
	const [previousValue, setPreviousValue] = useState('')
	const [currentValue, setCurrentValue] = useState('0') 
	const [operation, setOperation] = useState('')
	const [overwrite, setOverwrite] = useState(true)
	const value = calculate(previousValue,  currentValue, operation)

	const equals = useCallback(() => {
		setCurrentValue(`${value}`)
		setPreviousValue('')
		setOperation('')
		setOverwrite(true)
	}, [value])

	const clear = useCallback(() => {
		setPreviousValue('')
		setOperation('')
		setCurrentValue('0')
		setOverwrite(true)
	}, [])

	const del = useCallback(() => {
		setCurrentValue('0')
		setOverwrite(true)
	},[])

	/* const teste = useMemo(()=>{
    const curr = parseFloat(currentValue)
    return (curr/100).toString()
  }, [currentValue]) */

	const percent = useCallback(() => {
		return setCurrentValue(percentageCalculation(currentValue))
	}, [currentValue])

	const selectOperation = (x: string) => {
		if (previousValue === '') {
			setCurrentValue(`${value}`)
			setPreviousValue(`${value}`)
			
		} else {
			setPreviousValue(currentValue)
		}
		setOperation(x)
		setOverwrite(true)
	}

	const setValue = (input: string) => {
		if (currentValue[0] === '0' && input === '0') return
		if (currentValue.includes('.') && input === '.') return
	
		if (overwrite && input !== '.') {
			setCurrentValue(input)
	
		} else {
			setCurrentValue(`${currentValue}${input}`)
		} 
		setOverwrite(false)
	}

	return (
		<Container maxWidth="sm">
			<CalculatorBase elevation={3}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<CalculatorOutput>
							{currentValue}
						</CalculatorOutput>
					</Grid>
					<Grid item container columnSpacing={1}>
						<ButtonOperatorGrid
							operation={'AC'}
							selectOperation={clear}
							selectedOperation={operation}
						/>
						<ButtonOperatorGrid
							operation={'C'}
							selectOperation={del}
							selectedOperation={operation}
						/>
						<ButtonOperatorGrid
							operation={'%'}
							selectOperation={percent}
							selectedOperation={operation}
						/>
						<ButtonOperatorGrid
							operation={'÷'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<ButtonDigitGrid value={'7'} enterValue={setValue} />
						<ButtonDigitGrid value={'8'} enterValue={setValue} />
						<ButtonDigitGrid value={'9'} enterValue={setValue} />
						<ButtonOperatorGrid
							operation={'*'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<ButtonDigitGrid value={'4'} enterValue={setValue} />
						<ButtonDigitGrid value={'5'} enterValue={setValue} />
						<ButtonDigitGrid value={'6'} enterValue={setValue} />
						<ButtonOperatorGrid
							operation={'-'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<ButtonDigitGrid value={'1'} enterValue={setValue} />
						<ButtonDigitGrid value={'2'} enterValue={setValue} />
						<ButtonDigitGrid value={'3'} enterValue={setValue} />

						<ButtonOperatorGrid
							operation={'+'}
							selectOperation={selectOperation}
							selectedOperation={operation}
						/>
					</Grid>
					<Grid item container columnSpacing={1}>
						<ButtonDigitGrid xs={6} value={'0'} enterValue={setValue} />
						<ButtonDigitGrid value={'.'} enterValue={setValue} />

						<Grid item xs={3}>
							<Button fullWidth variant="contained" onClick={equals}>
                =
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</CalculatorBase>
		</Container>
	)
}

export default App
