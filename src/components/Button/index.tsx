import React from "react";

interface ButtonProps {
    content: string;
    background?: string;
    color?: string;
  }
  function Button (props:ButtonProps){
    return <button onClick={()=>{console.log("foi")}}>{props.content}</button>;
  }

export default Button;