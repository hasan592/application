import React from "react";

function About (props) {
    return(
    <div>
        About
        <button onClick = {() => props.history.push('/')}></button>

    </div>
    )
}