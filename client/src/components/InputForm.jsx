import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let address = event.target.value;
    this.setState({address});
  }

  handleSubmit(event) {
    event.preventDefault();
    let address = this.state.address;
    this.props.submitAddress(address);
  }

  render() {
    return (
      <form id="input-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <input type="text" className="form-control" placeholder="Address" required onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> 
    );
  }
}

export default InputForm;
