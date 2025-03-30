import React from "react";

const Button =(props)=>{

    return(
        <button className="btn" onClick={props.onClick}
        
        >{props.value}</button>//hello
    )
}
export default Button