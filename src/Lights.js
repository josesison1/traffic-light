import React from 'react'

const Lights = ({ color, lit, setLit }) => {
  return (
    <div className='outer-light'>
        <div className='lights' style={{backgroundColor: color === lit ? color : 'grey' }} onClick={() => setLit(color)} ></div>
    </div>
  )
}

export default Lights
