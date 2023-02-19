import React from 'react';
import {styled} from "@mui/material";


const CalculatorOutput = styled('div')(({ theme }) => ({
    width: '100%',
    textAlign: 'right',
    height: '3em',
    fontSize: '3em',
    overflow: 'hidden',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    
  }));

  export default CalculatorOutput;