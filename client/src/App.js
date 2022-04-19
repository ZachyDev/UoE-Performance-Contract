import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';

class App extends Component {
  state = {
    name: '',
    email: '',
    department: '',
    age: ''
  }

  handleChange = ({target: {value,name}}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
          const pdfBlob = new Blob([res.data],{ type: 'application/pdf' });

          saveAs(pdfBlob, 'newReceipt.pdf');
      })
  }
  render() {
  return (  
    <div className="App">
      <h1>Performance Contract Project</h1>
      <input type="text" placeholder="Enter name" name="name" onChange={this.handleChange} />  
      <input type="email" placeholder="Email" name="email" onChange={this.handleChange} />  
      <input type="dept" placeholder="Department" name="department" onChange={this.handleChange} />
      <input type="age" placeholder="Age" name="age" onChange={this.handleChange} /> 
      <button onClick={ this.createAndDownloadPdf }>Download PDF</button>
    </div>
  );
  }
}

export default App;
