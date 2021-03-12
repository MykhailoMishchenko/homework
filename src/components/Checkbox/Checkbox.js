import React, {useState} from 'react'

export default function Checkbox({ options = [], callback }) {

    const [clickBox, setClickBox] = useState([])


    let checkboxArr = options.map((item, index) => {
        return (
            <div>
                <input type = 'checkbox' id = {index} name = 'vehicleOne' value = {item.value} defaultChecked = {item.selected}/>
                <label htmlFor = 'vehicleOne'> {item.title}</label>
                <br />
            </div>
        )
    })


    return (
        <div onChange = {(e) => {
            if (!clickBox.includes(e.target.value)) {
                setClickBox([...clickBox, e.target.value])
            } else {
                setClickBox(clickBox.filter((item) => item !== e.target.value))
            }       
        }}>
        {checkboxArr}
            <button onClick = {() => {
                (callback([...clickBox]))
            }}>Look at console</button>
        </div>
    )
}