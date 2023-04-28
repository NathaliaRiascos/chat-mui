import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputIcon from './components/molecules/InputIcon/InputIcon';
import Card from './components/organisms/Card/Card';
import Input from './components/atoms/Input/Input';
import NavBar from './components/molecules/NavBar/NavBar';
import SpeedDial from './components/atoms/SpeedDial/SpeedDial';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Input />
    <Card>
      <InputIcon />
    </Card>    
    </>
  )
}

export default App
