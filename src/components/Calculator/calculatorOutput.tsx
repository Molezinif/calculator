import React from 'react';
import {styled} from "@mui/material";


const CalculatorOutput = styled('div')(({ theme }) => ({
    width: '100%',
    textAlign: 'right',
    height: '3em',
    fontSize: '3em',
    overflow: 'visible',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderRadius: 16,
  }));

  export default CalculatorOutput;