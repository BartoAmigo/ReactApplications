import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true}; 
    //this binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state=>({
      isToggleOn: !state.isToggleOn
    }));
  }
  render(){
    return (
      <button onClick ={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
class LoggingButton extends React.Component{
  handleClick = () => {
    console.log('this is:',this);
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        Click me
      </button>
    )
  }
}
const element = <ul><h1>Buttons to show different events</h1><li><Toggle/></li><li><LoggingButton/></li></ul>;

ReactDOM.render(
  element,
  document.getElementById("root")
);