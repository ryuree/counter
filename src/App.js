import React from 'react';
import styled from 'styled-components';
import './App.css';
import {Appbox,Title,Section,CounterNumWrap,Button} from './styled'

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
            <Button type="button" id="decrement" color={false} onClick={()=>this.handleDecreNum()}>-</Button>
            <Button type="button" id="increment" color={true} onClick={()=>this.handleIncreNum()}>+</Button>
          </CounterNumWrap>
        </Section>
      </Appbox>
    );
  };
}

export default App;
