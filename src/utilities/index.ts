//import { Operator } from './types'

export const percentageCalculation = (currentValue: string) => {
	const curr = parseFloat(currentValue)
	return (curr / 100).toString()
}

export const calculate = (previousValue: string,  currentValue: string, operation: string) => {
	if (!previousValue || !operation) return currentValue
	const current = parseFloat(currentValue)
	const previous = parseFloat(previousValue)

	let setResult = 0
	switch (operation) {
	case '÷':
		setResult = previous / current
		break
	case '*':
		setResult = previous * current
		break
	case '-':
		setResult = previous - current
		break
	case '+':
		setResult = previous + current
		break
	}
	//console.log('current', current)
	//console.log('previous', previous)
	//console.log('resultado: ' + setResult)
	return setResult
}


