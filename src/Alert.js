import React, { useState } from 'react'

const Alert = (color) => {
    const alerts = ['Stop!', 'Slow Down!', 'Go!']
    const [message, setMessage] = useState('Stop')
  return (
    <div className='alert'>{alerts.map(alert => {
        return message[0] ? color === 'red' : message[1]
    })}
    </div>
  )
}

export default Alert