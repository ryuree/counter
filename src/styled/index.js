import styled from 'styled-components';

const Appbox = styled.div`
  text-align:center
`;
const Title = styled.h1`
  color:#414141
`
const Section = styled.section`
  display: table;
  width: 100%;
  height: 100%;
`;
const CounterNumWrap = styled.div`
  display:table-cell;
  vertical-align: middle;
`

const Button = styled.button`
  border-radius:100px;
  width:50px;
  height: 50px;
  border:1px solid;
  background: ${(props) => (props.color ? '#7a7ac7' : '#717171')};
  border-color:${(props) => (props.color ? '#7a7ac7' : '#717171')};
  color:#fff;
  font-size:40px;
  margin-right:${(props) => (props.color ? '0' : '5px')};
`;

export {Appbox,Title,Section,CounterNumWrap,Button}