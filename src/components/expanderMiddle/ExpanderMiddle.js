import React, {useState} from 'react'
import './ExpanderMiddle.css'

const ExpanderMiddle = ({config = []}) => {
    const [indexOfSelected, setIndexOfSelected] = useState()

    const listExpanders = config.map((item, index) => {
        const active = indexOfSelected === index ? 'expander' : 'none';
        const activeIcon = indexOfSelected === index ? 'on' : "off";
        return (
            <>
                <div 
                title={item.title}
                className='expanderMainClass'
                index={index}
                onClick={ () => {
                    if (indexOfSelected !== index) {
                        setIndexOfSelected(index)
                    } else {
                        setIndexOfSelected()
                    }
                }}>
                    <div>{item.title}</div>
                    <div className={activeIcon}></div>
                </div>
                <div className={active}>{item.content}</div>
            </>
        )
    })

    return (
        <>
        {listExpanders}
        </>
    )
}

export default ExpanderMiddle;