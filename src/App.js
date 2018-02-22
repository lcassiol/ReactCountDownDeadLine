import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Training React - lcassiol</h1>
          <p className="App-title">CountdownDeadLine example from Udemy</p>
        </header>
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      
      </div>
    );
  }
}

export default App;
