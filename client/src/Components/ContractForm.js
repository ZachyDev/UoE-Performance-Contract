import React, { Component } from 'react';
import '../style.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
class ContractForm extends Component {

    state = {
      name: '', pf: '', headDept: '', department: '', status: '', staffName: '', staffPf: '', email: '', offExt: '', phone: '',
      designation: '', dept: '', employment: '', staffCat: '', jobDesc: '', deptObj: '', pIndicator: '', units: '', weight: '',
      target: '', totalWeight: '', expPerformance: '', memberName: '', memberSign: '', memberDate: '', headName: '', headSign: '',
      headDate: '',
    }
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      alert('Click happened');
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
        
        <div className='attachment'>
        <input type="file"/>
        <button onClick={ this.handleClick }>Send Filled Form</button>
        </div>
        
        {/* function to send  filled form */}
        
        
        
  <div className='intro'>
    
  <h1 className='title'>PERFORMANCE CONTRACT</h1><br />
  <h2>BETWEEN</h2>
  </div>
  
  <section>
   
   <input type="text"  name="name" placeholder="NAME............................" onChange={ this.handleChange }/>
   <input type="text" name="pf" placeholder="PF.NO..............................." onChange={ this.handleChange }/>
  </section>

  <div className='divider'>
    AND
  </div>
  
  <section>
   <input type="text" name="headDept" placeholder="HEAD OF......................................................................................
   ..........................DEPARTMENT" onChange={ this.handleChange }/>
  </section>
  
  <div className='divider'>
    <h2>AT</h2>
  </div>

  <section>
  <h2>UNIVERSITY OF ELDORET</h2>
  </section>

  <section>
   <p>1. Staff Details</p>
   <div className='staff'>
     {/* Username */}
      <div className='innerDiv'>
      <label>Please write your name starting Surname</label>
        <input type="text"  name="staffName" placeholder="NAME............................" onChange={ this.handleChange }/>
      </div>
  
      {/* PF NO. */}
      <div className='innerDiv'>
        <label>Please write your PF No.</label>
        <input type="text"  name="staffPf" placeholder="PF................................." onChange={ this.handleChange }/>
      </div>

      {/* email */}
      <div className='innerDiv'>
       <label>Please write your email (uoeld.ac.ke domain)</label>
        <input type="text"  name="email" placeholder="Email............................" onChange={ this.handleChange }/>
      </div>

      {/* Phone Ext */}
      <div className='innerDiv'>
        <label>Office extension No.</label>
        <input type="text"  name="offExt" placeholder="Phone Ext............................" onChange={ this.handleChange }/>
      </div>

      {/* Mobile No. */}
      <div className='innerDiv'>
        <label>Mobile Phone</label>
        <input type="text"  name="phone" placeholder="Mobile................................" onChange={ this.handleChange }/>
      </div>

      {/* Designation */}
      <div className='innerDiv'>
        <label>Please indicate your designation</label>
        <input type="text"  name="designation" placeholder="Designation..........................." onChange={ this.handleChange }/>
      </div>

      {/* Department */}
      <div className='innerDiv'>
        <label>Please write your department</label>
        <input type="text"  name="dept" placeholder="Department.................................." onChange={ this.handleChange }/>
      </div>

      {/* Nature of Employment */}
      <div className='innerDiv'>
        <label>Nature of Employment</label>
        <input type="text"  name="employment" placeholder="Permanent/Contract.................................." onChange={ this.handleChange }/>
      </div>

      {/* Department */}
      <div className='innerDiv'>
        <label>Staff Category</label>
        <input type="text"  name="staffCat" placeholder="Teaching/Non-Teaching.................................." onChange={ this.handleChange }
        />
      </div>
   </div>
   
   
  
  </section>
  {/* Job Description */}
  <section id="desc">
   <p>2.Job Description</p>
   <textarea rows="10" cols="100" placeholder='Briefly describe the work you do in your Department/Section' name="jobDesc"
   onChange={this.handleChange}>
  
   </textarea>
  </section>

  {/* departmental objectives */}
  <section id="desc">
   <p>3.Departmental objectives</p>
   <textarea rows="10" cols="100" placeholder='List the priority objectives of your department from which performance targets will be derived'
   name="deptObj" onChange={this.handleChange}>
   </textarea>
  </section>

    {/* performance indicators */}

  <section id="descDiv">
   <p>4. Performance Indicators</p>
        <div id='performance'>
        <input type="text"  name="pIndicator" placeholder="Performance Indicator" onChange={ this.handleChange }/>
        <input type="text"  name="units" placeholder="Units" onChange={ this.handleChange }/>
        <input type="text"  name="weight" placeholder="Weight" onChange={ this.handleChange }/>
        <input type="text"  name="targets" placeholder="Targets" onChange={ this.handleChange }/>
        <input type="text"  name="totalWeight" placeholder="Total Weight" onChange={ this.handleChange }/>
        </div>
        
       <div className='exp'>
       <label id='ind'>EXplanation of Performance Indicators and Targets</label>
        <textarea rows="10" cols="100" name="expPerformance" placeholder="Briefly explain how the targets for each
        the performance indicator will be achieved" onChange={ this.handleChange }>
        </textarea>
       </div>
  </section>
    {/* Signed By */}
    <section>
    <p>5.Signed By:</p>
    <p>Member of Staff</p>
      <div className='innerDiv2'>
        <label>Please write your name starting Surname</label>
          <input type="text"  name="memberName" placeholder="Name............................" onChange={ this.handleChange }/>
        </div>
        <div className='innerDiv2'>
      <label>Please write your name starting Surname</label>
        <input type="text"  name="memberSign" placeholder="Signature............................" onChange={ this.handleChange }/>
      </div>
      <div className='innerDiv2'>
      <label>Please write your name starting Surname</label>
        <input type="text"  name="memberDate" placeholder="Date............................" onChange={ this.handleChange }/>
      </div>
      
    </section>
    <section>
    <p>Head of Department:</p>
      <div className='innerDiv2'>
        <label>Please write your name starting Surname</label>
          <input type="text"  name="headName" placeholder="Name............................" onChange={ this.handleChange }/>
        </div>
        <div className='innerDiv2'>
      <label>Please write your name starting Surname</label>
        <input type="text"  name="headSign" placeholder="Signature............................" onChange={ this.handleChange }/>
      </div>
      <div className='innerDiv2'>
      <label>Please write your name starting Surname</label>
        <input type="text"  name="headDate" placeholder="Date............................" onChange={ this.handleChange }/>
      </div>
      
    </section>
  <button class="button" onClick={ this.createAndDownloadPdf }>Submit</button>
  
  
      </div>
    );
  }
  }
  export default ContractForm;
  