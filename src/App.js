import Lights from './Lights';
import Alert from './Alert';
import './App.css';
import React, { useState } from 'react'

function App() {
  const colors = ['red', 'yellow', 'green']
  const [lit, setLit] = useState('red')

  return (
  <div className='container'>
    {colors.map(color => {
      return <Lights color={color} lit={lit} setLit={setLit}/>
    })}
    <div>
      <Alert />
    </div>
  </div>

  )
}

export default App;
