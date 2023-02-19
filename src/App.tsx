import React, { useState } from 'react'
import CalculatorBase from './components/Calculator/calculatorBase'
import CalculatorOutput from './components/Calculator/calculatorOutput'
import { Container, Grid, Button} from '@mui/material'
import { ButtonDigitGrid } from './components/Button/ButtonDigitGrid'
import { ButtonOperatorGrid } from './components/Button/ButtonOperatorGrid'


function App() {
	const [previousValue, setPreviousValue] = useState('')
	const [currentValue, setCurrentValue] = useState('0')
	const [operation, setOperation] = useState('')
	const [overwrite, setOverwrite] = useState(true)

	const equals = () => {
    const val = calculate()
    setCurrentValue(`${val}`)
    setPreviousValue("")
    setOperation("")
    setOverwrite(true)
  }

  const calculate = () => {
    if (!previousValue || !operation) return currentValue

    const curr = parseFloat(currentValue)
    const prev = parseFloat(previousValue)

    console.log("curr", curr)
    console.log("prev", prev)
    let result
    switch (operation) {
      case "÷":
        result = prev / curr
        break
      case "*":
        result = prev * curr
        break
      case "-":
        result = prev - curr
        break
      case "+":
        result = prev + curr
        break
    }
    console.log("resultado", result)
    return result
  }

  const clear = () => {
    setPreviousValue("")
    setOperation("")
    setCurrentValue("0")
    setOverwrite(true)
  }

  const del = () => {
    setCurrentValue("0")
    setOverwrite(true)
  }

  const percent = () => {
    const curr = parseFloat(currentValue)
    setCurrentValue((curr / 100).toString())
  }

  const selectOperation = (x: string) => {
    if (previousValue) {
      const val = calculate()
      setCurrentValue(`${val}`)
      setPreviousValue(`${val}`)
    } else {
      setPreviousValue(currentValue)
    }
    setOperation(x)
    setOverwrite(true)
  }

  const setValue = (value: string) => {
    if (currentValue[0] === "0" && value === "0") return
    if (currentValue.includes(".") && value === ".") return

    if (overwrite && value !== ".") {
      setCurrentValue(value)
    } else {
      setCurrentValue(`${currentValue}${value}`)
    }
    setOverwrite(false)
  }

	return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CalculatorOutput data-testid="output">
              {currentValue}
            </CalculatorOutput>
          </Grid>
          <Grid item container columnSpacing={1}>
            <ButtonOperatorGrid
              operation={"AC"}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <ButtonOperatorGrid
              operation={"C"}
              selectOperation={del}
              selectedOperation={operation}
            />
            <ButtonOperatorGrid
              operation={"%"}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <ButtonOperatorGrid
              operation={"÷"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <ButtonDigitGrid value={"7"} enterValue={setValue} />
            <ButtonDigitGrid value={"8"} enterValue={setValue} />
            <ButtonDigitGrid value={"9"} enterValue={setValue} />
            <ButtonOperatorGrid
              operation={"*"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <ButtonDigitGrid value={"4"} enterValue={setValue} />
            <ButtonDigitGrid value={"5"} enterValue={setValue} />
            <ButtonDigitGrid value={"6"} enterValue={setValue} />
            <ButtonOperatorGrid
              operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <ButtonDigitGrid value={"1"} enterValue={setValue} />
            <ButtonDigitGrid value={"2"} enterValue={setValue} />
            <ButtonDigitGrid value={"3"} enterValue={setValue} />

            <ButtonOperatorGrid
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <ButtonDigitGrid xs={6} value={"0"} enterValue={setValue} />
            <ButtonDigitGrid value={"."} enterValue={setValue} />

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
