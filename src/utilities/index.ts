export const percentageCalculation = (currentValue: string) => {
	const curr = parseFloat(currentValue)
	return (curr / 100).toString()
}

export const calculate = (previousValue: string, operation: string, currentValue: string) => {
	//if (!previousValue || !operation) return currentValue

	const current = parseFloat(currentValue)
	const previous = parseFloat(previousValue)

	let result = 0
	switch (operation) {
	case '÷':
		result = previous / current
		break
	case '*':
		result = previous * current
		break
	case '-':
		result = previous - current
		break
	case '+':
		result = previous + current
		break
	}
	console.log('current', current)
	console.log('previous', previous)
	console.log('resultado', result)
	return result
}