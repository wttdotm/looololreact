import logo from './logo.svg';
import './App.css';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from '@mui/material/Button';
import { useState, useEffect, componentDidUpdate } from 'react';
import Splider from './components/slider';


function App() {

  const search = window.location.search // value of window.location.search
  const params = new URLSearchParams(search);
  // alert(params.get('x'))
  let targetNum
  if (typeof parseInt(params.get('x')) === 'number') {
    targetNum = parseInt(params.get('x'))
  }
  // console.log(params.get('x'));
  // for (const [key, value] of params) {
  //   console.log(key, 'is', value);
  // }
  // alert(targetNum)
  console.log(targetNum)
  const [goal, setGoal ] = useState(targetNum || 69)
  const [ calcNumber, setCalcNumber] = useState(0)
  const [ binAsString, setBinAsString ] = useState('')

  const howManyPowersOf2 = (num) => {
    // console.log(num)
    let power = 0
    // console.log(2**power)
    while (num > 2**power) {
      // console.log(num, 2**power)
      power++
    }
    // console.log('end power', power)
    return power
  }
  
  //create an array that is X long
  //use that array to make the state

  
  const [binArray, setBinArray] = useState([]);

  

  useEffect(() => {
    console.log('useEffect is running with goal number', goal)
    const binNeeded = howManyPowersOf2(goal)
    const initialArray = new Array(binNeeded).fill(0);
    setBinArray(initialArray);
    setBinAsString(initialArray.reverse().join(''))
    let bins = []

  }, [goal])


  const updateBinArray = (index, value) => {
    setBinArray(prevArray => {
      const newArray = [...prevArray];
      newArray[index] = value;

      setCalcNumber(oldNum => {
        let resultNum = 0
        newArray.forEach((el, i) => {
          // console.log('this is el i', el, i)
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
  };

  let resultNum = 0
  binArray.forEach((el, i) => {
    // console.log('this is el i', el, i)
    if (el) {
      resultNum += 2**i
    }
  })



  let bins = []
  for (let i = 0; i < binArray.length; i++) {
    console.log("binArray in for loop", binArray)
  // for (let i = 0; i < Array(howManyPowersOf2(goal)).fill(0).length; i++) {
    // let hold = 0
    // let holdTrue = false
    // if (goal === 420 && calcNumber == 69) holdTrue = true
    bins.push(<Splider binArray={binArray} binArrayEl={binArray[i]} index={i} key={i} updateBinArray={updateBinArray}></Splider>)
  }

  setTimeout(() => {
    if (goal === calcNumber && calcNumber === 69) {
      console.log("setting goal to 420")
      setGoal(420)
      clickAllActiveToggles()
      // alertGoal()
    } else if (goal === 420 && calcNumber === 420) {
      console.log("setting goal to 800085")
      setGoal(80085)
      clickAllActiveToggles()
      // alertGoal()
    } else if (goal === calcNumber) {
      clickAllActiveToggles()
      alert("You can learn how to make any numberby putting it in the URL like so: looo.lol/?x=42069")
    }
    // alertGoal()
  }, 500)

  // const alertGoal = () => alert("goal!!")
  const clickAllActiveToggles = () => {
    // Select all elements with the class 'your-class'
    const elements = document.querySelectorAll('.untoggled-button-active');

    // Loop through the NodeList
    elements.forEach(el => {
      // Create a click event
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });

      // Dispatch the event on each element
      el.dispatchEvent(clickEvent);
    });
  }


  return (
    <div className="App">
      <header className="App-header" style={{justifyContent : 'start', paddingTop : '100px'}}>
        <h1 style={{marginBottom:'0px'}}>{calcNumber}</h1>
        <p style={{fontSize: 'medium', marginTop: '0px'}}><i>Make {goal}</i></p>
        <h3>{binAsString}</h3>
        <div style={{display: 'flex', flexDirection : 'row-reverse', alignItems : 'center', justifyContent : 'center', maxWidth : '80%'}}>
          {bins}
        </div>
        <p style={{fontSize: 'medium', padding: '0% 30%'}}><i>Binary math can seem hard, but it's actually quite simple. This site is a game to help you realize that. Try clicking around and see if you can make the goal.<br></br><br></br>Hint: if its your first time playing, you've already been told the answer :) <br></br><br></br>-<a href='https://wttdotm.com'>WTTDOTM</a></i></p>
        <br></br>
        <p style={{fontSize: 'medium', padding: '0% 30%'}}><i> </i></p>
      </header>
    </div>
  );
}

export default App;
