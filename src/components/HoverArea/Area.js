import React, {Component} from "react";
import Title from "./Title";
import './Area.css'

class Area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionX: 0,
            positionY: 0,
        }
    }

    moveHandler = (e) => {
        this.setState({
            positionX: e.clientX | 0,
            positionY: e.clientY | 0
        })
    }

    render() {
        const {positionX, positionY} = this.state;


        return (
            <>
                <div
                    className="area"
                    onMouseMove={this.moveHandler}
                >
                    <Title
                        fontColor='white'
                        backgroundColor='black'
                        positionX={positionX}
                        positionY={positionY}
                        content='I am content'/>
                    <div className='x'>X: {positionX}</div>
                    <div className="y">Y: {positionY}</div>
                </div>
            </>
        )
    }
}

export default Area