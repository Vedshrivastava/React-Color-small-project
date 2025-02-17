import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color) 
  {
    setColor(color);
  }

  return (
    <div className='w-screen h-screen' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick = {() => {changeColor('red')}} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>red</button>
          <button onClick = {() => {setColor('blue')}} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>blue</button>
          <button onClick = {() => {changeColor('green')}} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>green</button>
        </div>
      </div>
    </div>
  )
}

export default App
