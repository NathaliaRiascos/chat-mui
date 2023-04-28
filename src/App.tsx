import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputIcon from './components/molecules/InputIcon/InputIcon';
import Card from './components/organisms/card/Card';
import Input from './components/atoms/input/Input';
import NavBar from './components/molecules/NavBar/NavBar';
import SpeedDialComponent from './components/atoms/speedDial/SpeedDial';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SpeedDialComponent />
    <NavBar />
    <Input />
    <Card styles='card--white'>
      <InputIcon />
    </Card>    
    </>
  )
}

export default App
