import React from "react";

const ButtonMain = (props)=>{
    return(
        <>
            <button className="mainButton">
                    {props.text}
            </button>
        </>
    )
}

export default ButtonMain;