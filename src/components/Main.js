import React from "react";
import "../components/Main.css";
import GeometricShapes from "../components/GeometricShapes";
import GeometricShapesData from "../shapes";

function Main() {

    const GeometricShapesObj = GeometricShapesData.map((shapeInfo, i) => <GeometricShapes key={i} shape={shapeInfo.shape} color={shapeInfo.color} />)
    const GeometricShapesObjFiltered = GeometricShapesObj.filter((shapeInfo, i) => { if (shapeInfo.props.shape === "square") return <GeometricShapes key={i} shape={shapeInfo.props.shape} color={shapeInfo.props.color} /> })
    return (
        <div>
            {GeometricShapesObjFiltered}
        </div>
    )
}

export default Main;