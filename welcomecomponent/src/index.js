import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(props){
  return <h1>Hello, {props.name} </h1>
}

function AddFunction(props){
  const sum = parseInt(props.number1,10) + parseInt(props.number2,10);
  return <h1>{sum}</h1>
}

function App(){
  return (
    <div>
      <Welcome name="Kalub" />
      <Welcome name="Adam"/>
      <Welcome name="Bartholomew"/>
      <Welcome name="Yzabel"/>
      <Welcome name="Anthony"/>
      <Welcome name="Tony"/>
      <AddFunction number1="6" number2="9"/>
      <AddFunction number1="12" number2="4"/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
