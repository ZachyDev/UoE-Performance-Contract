import React, { Component } from 'react';
import '../style.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
class ContractForm extends Component {

    state = {
      fname: '',
      lname: '',
      email: '',
      department: '',
      status: ''
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
      <div className="Form">
        <div id="svg_wrap"></div>
  
  <h1>Performance Contract</h1>
  
  <section>
   <p>Personal information</p>
   <input type="text" name="fname" placeholder="Firstname" onChange={ this.handleChange }/>
   <input type="text" name="lname" placeholder="Last Name" onChange={ this.handleChange }/>
   <input type="text" name="email" placeholder="Email" onChange={ this.handleChange }/>
   <input type="text" name='department' placeholder="Department" onChange={ this.handleChange }/>
   <input type="text" name="status" placeholder="Family status" onChange={ this.handleChange }/>
  </section>
  
  <section>
   <p>Address</p>
   <input type="text" placeholder="Street, nbr" />
   <input type="text" placeholder="City" />
   <input type="text" placeholder="Postcode" />
   <input type="text" placeholder="Country" />
  </section>
  
  <section>
   <p>Contact information</p>
   <input type="text" placeholder="Email address" />
   <input type="text" placeholder="Phone" />
   <input type="text" placeholder="Mobile" />
  </section>
  
  <section>
   <p>Application</p>
   <input type="text" placeholder="Preferred entrance date" />
   <input type="text" placeholder="Number of people" />
  </section>
  
  <button class="button" onClick={ this.createAndDownloadPdf }>Submit</button>
  
  
      </div>
    );
  }
  }
  export default ContractForm;
  