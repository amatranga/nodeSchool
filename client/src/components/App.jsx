import React from 'react';
import Navbar from './Navbar';
import InputForm from './InputForm';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }

    this.submitAddress = this.submitAddress.bind(this);
  }

  submitAddress(address) {
    event.preventDefault();
    this.setState({address})
  }

  render() {
    return (
      <div>
        <Navbar />
        <InputForm submitAddress={this.submitAddress}/>
        <hr />
        <Results />
      </div>
    );
  }
}

export default App;