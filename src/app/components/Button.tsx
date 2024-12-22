import React from "react";

interface ButtonProps {
    bgColor: string;
    text: string, 
    color: string,
}
const Button: React.FC<ButtonProps> = (props) => {
    return (
      <button className={`${props.bgColor} ${props.color} px-6 py-3 rounded-3xl font-bold `}>
        {props.text}
      </button>
    );
  };

export default Button;