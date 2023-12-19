import logo from './logo.svg';
import './App.css';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Splider from './components/slider';


function App() {
  const [goal, setGoal ] = useState(69)
  const [ calcNumber, setCalcNumber] = useState(0)

  const howManyPowersOf2 = (num) => {
    console.log(num)
    let power = 0
    console.log(2**power)
    while (num > 2**power) {
      console.log(num, 2**power)
      power++
    }
    console.log('end power', power)
    return power
  }
  
  //create an array that is X long
  //use that array to make the state

  
  const [binArray, setBinArray] = useState([]);

  useEffect(() => {
    const initialArray = new Array(howManyPowersOf2(69)).fill(0);
    setBinArray(initialArray);
  }, [])

  const bins = []
  for (let i = 0; i < binArray.length; i++) {
    bins.push(<Splider binArray={binArray} index={i} key={i} calcNumber={calcNumber} setBinArray={setBinArray} setCalcNumber={setCalcNumber}></Splider>)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>{calcNumber}</h1>
        <div style={{display: 'flex', flexDirection : 'row-reverse'}}>
          {bins}
        </div>
      </header>
    </div>
  );
}

export default App;
