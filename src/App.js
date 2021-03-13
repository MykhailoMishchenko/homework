import React, {useState} from 'react'
import SemanticExpander from './components/Semantic/SemanticExpander'

function App() {
  const list = [
    {title: "Ukraine", value: 'Ukraine', key: 1},
    {title: "Russian", value: 'Russian', key: 2},
    {title: "Belarus", value: 'Belarus', key: 3},
    {title: "Turkish",value: 'Turkish', key: 4},
    {title: "Canada",value: 'Canada', key: 5},
    {title: "Germany",value: 'Germany', key: 6},
    {title: "Poland",value: 'Poland', key: 7},
    {title: "Italy",value: 'Italy', key: 8},
]
const [selected, setSelected] = useState(list[0])
  return (
    <div className="App">
      <div className='main'>
      <h1>Semantic dropdown</h1>
        <SemanticExpander list={list} selected={selected} setSelected={setSelected}/>
      </div>
    </div>
  );
}

export default App;
