import React, {useState} from 'react'
import './Expander.css'

const Expander = () => {
    const [active, setActive] = useState(false)

    const handlerClick = () => {
        setActive(!active)
    }

    return (
        <>
        <div 
        className='expander'
        onClick={handlerClick}>click on me to see a magic</div>
        <div className={active ? `expander-list ${'active'}` : `expander-list`}>
            <h2>Magic</h2>
        </div>
        </>
    )
}

export default Expander
