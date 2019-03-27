import React, { Component } from 'react';
import Select from 'react-select';
import { initApi } from "./api";

//import logo from './logo.svg';
//import './App.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      api: {},
      options: options,
      value: ""
    };
  }

  componentWillMount() {
    initApi(api => {
      api.window.startAutoResizer();
      this.setState({
        value: "",
        api: api,
        options: options
      });
    });
  }
  
  handleChange = (selectedOption) => {
    api.field.setValue(selectedOption);
    this.state.value = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }
  
  render() {
    const { selectedOption } = this.state.value;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default App;
