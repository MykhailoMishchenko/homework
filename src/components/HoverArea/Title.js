import React, {Component} from "react";

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionY: props.positionY,
            positionX: props.positionX,
            title: "content"
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.positionX > state.positionX) {
            return {
                positionX: props.positionX,
                positionY: props.positionY,
                title: "right"
            }
        } else if (props.positionX < state.positionX) {
            return {
                positionX: props.positionX,
                positionY: props.positionY,
                title: "left"
            }
        } else if (props.positionY < state.positionY) {
            return {
                positionX: props.positionX,
                positionY: props.positionY,
                title: "up"
            }
        } else if (props.positionY > state.positionY) {
            return {
                positionX: props.positionX,
                positionY: props.positionY,
                title: "down"
            }
        }
    }

    render() {
        const {fontColor, backgroundColor, positionX, positionY} = this.props;
        const {title} = this.state;
        return (
            <>
                <div
                    style={{
                        color: fontColor,
                        backgroundColor: backgroundColor,
                        left:`${positionX}px`,
                        top:`${positionY}px`
                    }}
                    className="title">{title}</div>
            </>
        )
    }
}

export default Title