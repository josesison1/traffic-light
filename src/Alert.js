import React from 'react'

const Alert = (color) => {
    const alerts = ['Stop!', 'Slow Down!', 'Go!']
    const [message, setMessage] = useState('Stop')
  return (
    <div className='alert'>{alerts.map(alert => {
        return 'Stop!' ? color === 'red' : 'Slow Down'
    })}
    </div>
  )
}

export default Alert