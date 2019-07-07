import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import {Appbox,Title,Section,CounterNumWrap} from './styled'

import {Buttons} from "./components";


const App =function() {
  const INIT_COUNT = 0;
  const DIFF_COUNT = 1;
  const [count,setCount] = useState(INIT_COUNT);
  const title = 'COUNTER APP'
 
  const handleIncreNum = ()=>{setCount(count + DIFF_COUNT)};
  const handleDecreNum = ()=>{setCount(count - DIFF_COUNT)};
  const handleReset = () =>{setCount(INIT_COUNT)};

  useEffect (
    ()=>{
      console.log('=== componentDidMount ===');
      return ()=>{console.log('=== before Rerender Component ===')}
    }
  )

  return (
    <Appbox>
      <Title>{title}</Title>
      <Section>
        <CounterNumWrap>
          <h1>{count}</h1>
          <Buttons id="increment" color onHandle={handleIncreNum}>+</Buttons>
          <Buttons id="decrement" onHandle={handleDecreNum}>-</Buttons>
          <Buttons id="reset" onHandle={handleReset}>re</Buttons>
        </CounterNumWrap>
      </Section>
    </Appbox>
  );
}

export default App;
