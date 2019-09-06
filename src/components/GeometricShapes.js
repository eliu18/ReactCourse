import React from "react";
import "../index.css";
function GeometricShape(props) {

    let color = { backgroundColor: props.color };

    if (props.shape === "triangle") {
        color = { borderBottom: "100px solid " + props.color }
    }

    return (
        <div>
            <div className={props.shape} style={color}></div>
        </div>
    )
}

export default GeometricShape;