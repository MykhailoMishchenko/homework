import React from 'react'
import Checkbox from './Checkbox'



export default function Renderlist() {

    const automobile = [{
        value: 'MAZDA',
        title: 'Select MAZDA',
        selected: false
    }, {
        value: 'NISSAN',
        title: 'Select NISSAN',
        selected: false
    }, {
        value: 'TOYOTA',
        title: 'Select TOYOTA',
        selected: false
    }, {
        value: 'HONDA', 
        title: 'Select HONDA',
        selected: false
    }, {
        value: 'SUBARU', 
        title: 'Select SUBARU',
        selected: false
    }]


    return (
        <div>
            <Checkbox options = {automobile} callback = {(value) => console.log(value)}/>
        </div>
    )
}
