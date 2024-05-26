import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTable from './components/MyTable';

function App() {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (    
    <div>
      <MyTable data={data}/>
    </div>
  )
}

export default App
