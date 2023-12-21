import logo from '../logo.svg';
import '../App.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import { useRef, useEffect, useState } from 'react';


const Splider = (props) => {
  const {binArray, binArrayEl, index, updateBinArray} = props
  // const newBinArray = [...binArray]
  // console.log('binArray at index', binArray, index)
  console.log("bin arr el", binArrayEl)
  const [resultingNum, setResultingNum] = useState(0)
  const [selected, setSelected] = useState(false);

  const mainRef = useRef()
  // mainRef.current.splide.go('+1')
  // const subtractFromCalc = (num) => {
  //   setCalcNumber(calcNumber - num)
  // }

  // const addToCalc = (num) => {
  //   setCalcNumber(calcNumber + num)
  // }

  const handleMoved = (splide, prev, next) => {
    // console.log(splide, "prev:", prev, "next:", next)
    // console.log("old bin array", binArray)
    updateBinArray(index, prev ? 1 : 0);
    setResultingNum(prev ? 2**index : 0)
    // setResultingNum(prev === binArrayEl ? 2**index : 0)
  };



  return (
    <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center',
     maxWidth : binArray.length > 15 ? '5vw' : '100%'
     }}>
      <h4>{resultingNum}</h4>
      <Splide 
          ref = {mainRef}
          // style={{marginBottom : '0px'}}
          // padding='0px'
          onMove={ ( splide, prev, next ) => handleMoved(splide, prev, next) }
          aria-label="My Favorite Images"   options={ {
          rewind: true,
          width : 200,
          gap   : '1rem',
          type : 'loop',
          direction : 'ttb',
          height: '75px',
          pagination: false,
          // start: binArrayEl,
          // hasTrack : false,
          keyboard : true,
          arrows : false,
        } }>
          {/* <SplideTrack> */}
            <SplideSlide>
              <div style={{maxHeight:'50px', minWidth:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize:'large'}}>0</p>
              </div>
            </SplideSlide>
            <SplideSlide>
            <div style={{maxHeight:'50px', minWidth:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize:'large'}}>1</p>
              </div>
            </SplideSlide>
          {/* </SplideTrack> */}
      </Splide>
        <ToggleButton 
          class={selected ? "untoggled-button-active" : "untoggled-button"}
          // value={2^{index}}
          disableRipple
          onChange={
            () => {
              mainRef.current.splide.go('+1')
              setSelected(!selected);
            }}
        >2^{index}</ToggleButton>
        {/* <Button style={{height: '100px', width: '100px', backgroundColor: 'red'}}onClick={
          () => {
            mainRef.current.splide.go('+1')
            if (this.style.backgroundColor === 'red') this.style.backgroundColor = 'blue'
          }}>button</Button> */}
    </div>
  )
}

export default Splider;
