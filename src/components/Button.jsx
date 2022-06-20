/*
Isma del pasado hablando al isma del futuro,
este es tu primer proyecto de React, aquí te dejo tus apuntes majo

    Proyecto 1: boton reutilizable
*/
import React from "react";
import "./Button.css"

const variants = [
    "outline",
    "text"
];
const shadows = [
    "disableShadow",
    "enableShadow"
];
const disable = [
    "enable",
    "disable"
];
const sizes = [
    "md",
    "sm",
    "lg"
];
const colors = [
    "default",
    "secondary",
    "danger",
    "primary"
];

//en la const en los parentesis puedes poner variables que vas a utilizar
//esta tiene un return para devolver algo

export const Button = ({children, color, variant, size, shadow, disabled}) =>{

    const hasColor = colors.includes(color) 
    ? color 
    : colors[0]

    const hasSize = sizes.includes(size) 
    ? size 
    : sizes[0]

    const hasVariant = variants.includes(variant) 
    ? variant 
    : ""

    const hasShadow = shadows.includes(shadow) 
    ? shadow 
    : ""

    const hasDisabled = disable.includes(disabled) 
    ? disabled 
    : ""


    return(
        <button className={`btn ${hasColor} ${hasSize} ${hasVariant} ${hasShadow} ${hasDisabled} `}>
            {children}
        </button>
    )
}
