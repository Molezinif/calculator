import React, { useState } from 'react';
import Button from "./components/Button";
import CalculatorBase from "./components/Calculator/calculatorBase";
import CalculatorOutput from "./components/Calculator/calculatorOutput";
import {Paper, Container, styled, Grid} from "@mui/material";
type Operator =  '+' | '-' | "*" | "/";



const Calculator = () =>{
  const [displayValue, setDisplayValue] = useState('0');
}

function App() {
  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs = {12}>
            <CalculatorOutput>0</CalculatorOutput>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
