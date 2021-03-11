import React, {useState} from 'react';
import './Search.css'

function Search() {
    const [value, setValue] = useState('hello');

    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    async function sendRequest () {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${value}`)
        const result = await response.json()
        console.log(result)
    }

    return (
        <div className='search'>
            <input 
            className="styleInput"
            placeholder="/..."
            onInput={inputHandler}/>
            <button
             className="styleButton"
             onClick={sendRequest}>
                Search
            </button>
        </div>
    )

}

export default Search;