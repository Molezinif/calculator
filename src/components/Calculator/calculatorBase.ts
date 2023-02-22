import {Paper, styled} from '@mui/material'

const CalculatorBase = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	marginTop: theme.spacing(4),
	borderRadius: 16,
}))

export default CalculatorBase