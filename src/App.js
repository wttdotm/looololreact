import logo from './logo.svg';
import './App.css';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Splider from './components/slider';


function App() {

  const search = window.location.search // value of window.location.search
  const params = new URLSearchParams(search);

  let targetNum
  if (typeof parseInt(params.get('x')) === 'number') {
    targetNum = parseInt(params.get('x'))
  }
  // console.log(params.get('x'));
  // for (const [key, value] of params) {
  //   console.log(key, 'is', value);
  // }

  const [goal, setGoal ] = useState(targetNum || 69)
  const [ calcNumber, setCalcNumber] = useState(0)
  const [ binAsString, setBinAsString ] = useState('')

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
    console.log('useEffect is running')
    const binNeeded = howManyPowersOf2(goal)
    const initialArray = new Array(binNeeded).fill(0);
    setBinArray(initialArray);
    setBinAsString(initialArray.reverse().join(''))
  }, [])


  const updateBinArray = (index, value) => {
    setBinArray(prevArray => {
      const newArray = [...prevArray];
      newArray[index] = value;

      setCalcNumber(oldNum => {
        let resultNum = 0
        newArray.forEach((el, i) => {
          console.log('this is el i', el, i)
          if (el) {
            resultNum += 2**i
          }
        })
        return resultNum
      })

      setBinAsString(oldString => {
        let newString = ''
        newArray.forEach((el, i) => {
          newString = el + newString
        })
        return newString
      })

      return newArray;
    });
    // setCalcNumber(oldNum => {
    //   let resultNum = 0
    //   const newArray = [...binArray];
    //   newArray[index] = value;
    //   newArray.forEach((el, i) => {
    //     console.log('this is el i', el, i)
    //     if (el) {
    //       resultNum += 2**i
    //     }
    //   })
    //   return resultNum
    // })
  };

  let resultNum = 0
  binArray.forEach((el, i) => {
    console.log('this is el i', el, i)
    if (el) {
      resultNum += 2**i
    }
  })





  const bins = []
  for (let i = 0; i < binArray.length; i++) {
    console.log(binArray)
    bins.push(<Splider binArray={binArray} index={i} key={i} updateBinArray={updateBinArray}></Splider>)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>{calcNumber}</h1>
        <h3>{binAsString}</h3>
        <div style={{display: 'flex', flexDirection : 'row-reverse', alignItems : 'center', justifyContent : 'center', maxWidth : '80%'}}>
          {bins}
        </div>
      </header>
    </div>
  );
}

export default App;
