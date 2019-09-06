import React from "react";
import "../components/Main.css";
import GeometricShapes from "../components/GeometricShapes";
function Main() {
    return (
        <div>
            <GeometricShapes shape="square" color="blue"/>
            <GeometricShapes shape="triangle" color="red"/>
            <GeometricShapes shape="rectangle" color="yellow"/>
        </div>
    )
}

export default Main;