import logo from '../logo.svg';
import '../App.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from '@mui/material/Button';
import { useRef, useEffect, useState } from 'react';


const Splider = (props) => {
  const {binArray, index, updateBinArray} = props
  // const newBinArray = [...binArray]
  console.log('binArray at index', binArray, index)

  const [resultingNum, setResultingNum] = useState(0)

  // const subtractFromCalc = (num) => {
  //   setCalcNumber(calcNumber - num)
  // }

  // const addToCalc = (num) => {
  //   setCalcNumber(calcNumber + num)
  // }

  const handleMoved = (splide, prev, next) => {
    console.log(splide, "prev:", prev, "next:", next)
    console.log("old bin array", binArray)
    updateBinArray(index, prev ? 1 : 0);
    setResultingNum(prev ? 2**index : 0)
  };



  return (
    <div style={{display : 'flex', flexDirection : 'column'}}>
      <h4>{resultingNum}</h4>
      <Splide 
          // ref={splideRef}
          onMove={ ( splide, prev, next ) => handleMoved(splide, prev, next) }
          // onMoved = {handleMoved}
          aria-label="My Favorite Images"   options={ {
          rewind: true,
          width : 200,
          gap   : '1rem',
          type : 'loop',
          direction : 'ttb',
          height: '200px',
          pagination: false
          
        } }>
        <SplideSlide>
          <div style={{minHeight:'100px', minWidth:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize:'large'}}>0</p>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div style={{minHeight:'100px', minWidth:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize:'large'}}>1</p>
          </div>
        </SplideSlide>
      </Splide>
      {/* <Button onClick={() => {splideRef.current.splide.next()}}>button</Button> */}
    </div>
  )
}

export default Splider;
