import React from 'react';
import styled from 'styled-components';
import './App.css';
import {Appbox,Title,Section,CounterNumWrap} from './styled'

import {Buttons} from "./components";

class App extends React.Component {
  state = {
    count :0
  }

  handleIncreNum(){
    this.setState({
      count : this.state.count + 1,
    });
  }

  handleDecreNum(){
    this.setState({
      count : this.state.count - 1,
    });
  }

  render() {
    const {count} = this.state;
    const isClick = count >= 1

    return (
      <Appbox>
        <Title>COUNTER APP</Title>
        <Section>
          <CounterNumWrap>
            {/* <h1>{isClick ? count +'클릭함': count +'클릭안함'}</h1> */}
            <h1>{count}</h1>
            <Buttons id="decrement" onHandle={()=>this.handleDecreNum()}>-</Buttons>
            <Buttons id="increment" color onHandle={()=>this.handleIncreNum()}>+</Buttons>
          </CounterNumWrap>
        </Section>
      </Appbox>
    );
  };
}

export default App;
