import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date: new Date(),Id: props.Id};
  }
  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
  render(){
    return(
      <div>
        <h1>Clock Object #{this.state.Id}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function App(){
  return(
    <div>
      <Clock Id="0"/>
      <Clock Id="1"/>
      <Clock Id="2"/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
