import React from "react";
import "../components/Main.css";
import GeometricShapes from "../components/GeometricShapes";
import GeometricShapesData from "../shapes";

/* function Main() {


} */

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: true
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }
    handleChangeInput() {
        this.setState((prevState) => {
            return { checked: !prevState.checked }
        })
    }
    render() {
        const GeometricShapesObj = GeometricShapesData.map((shapeInfo, i) => <GeometricShapes key={i} shape={shapeInfo.shape} color={shapeInfo.color} />)
        const GeometricShapesObjFiltered = GeometricShapesObj.filter((shapeInfo, i) => { if (shapeInfo.props.shape === "square") return <GeometricShapes key={i} shape={shapeInfo.props.shape} color={shapeInfo.props.color} /> })
        return (
            <div>
                {GeometricShapesObjFiltered}
                <input type="checkBox" placeholder="Hola mundo" onChange={this.handleChangeInput.bind(this)} checked={this.state.checked}  />
            </div>
        )
    }
}

export default Main;