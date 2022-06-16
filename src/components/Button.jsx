/*
Isma del pasado hablando al isma del futuro,
este es tu primer proyecto de React, aquí te dejo tus apuntes majo

    Proyecto 1: boton reutilizable
*/

import React from "react";
import "./Button.css"

const variant = [
    "outlne",
    "text"
];
const shadow = [
    "disableShadow" ? "none" : "" 
];
const disable = [
    "disabled" ? "enabled" : "" 
];
const size = [
    "sm",
    "md",
    "lg"
];
const color = [
    "primary",
    "secondary",
    "danger",
    "default",
];
const startIcon = [
    "local_grocery_store" ? "none" : ""
];
const endIcon = [
    "local_grocery_store" ? "none" : ""
];
//en la const en los parentesis puedes poner variables que vas a utilizar
//esta tiene un return para devolver algo
export const Button = () =>{
    return(
        <button className={`btn ${variant} ${color} `}>
        </button>
    )
}
