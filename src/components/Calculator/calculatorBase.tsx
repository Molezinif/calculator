import React from "react";
import {Paper, styled} from "@mui/material";

  const CalculatorBase = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(2.5),
    borderRadius: 16,
  }));

export default CalculatorBase;