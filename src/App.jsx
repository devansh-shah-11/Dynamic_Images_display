import { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0)
  const AddCounter = () => setCounter(counter + 1)
  const SubtractCounter = () => setCounter(counter - 1)

  console.log('rendering...', counter)
  return (
    <div>
      <button onClick={AddCounter}>+</button>
      {'\t'}
      <span>{counter}</span>
      {'\t'}
      <button onClick={SubtractCounter}>-</button>
    </div>
  )
}

export default Counter