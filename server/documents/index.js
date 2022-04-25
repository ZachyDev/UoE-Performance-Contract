module.exports = ({ name, pf, headDept, staffName, staffPf, email, offExt, phone,
designation, dept, employment, staffCat, jobDesc, deptObj, pIndicator, units, weight,
target, totalWeight, expPerformance, memberName, memberSign, memberDate, headName, headSign,
headDate }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 1000px;
             margin: auto;
             padding: 20px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             
             .invoice-box table td {
             padding: 10px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 10px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 15px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             .deptTitle {
                font-size: 17px;
                fonr-family: san-serif;
                text-align:left;
                margin-left:20%;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             margin-left: 30%
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>  
                      <tr>
                      <td class="title"><img  src="https://i2.wp.com/developersafrica.co.ke/uoe.png?fit=800%2C600&ssl=1"
                      style="width:350px; max-width:550px;margin-left:16%"></td>
                      </tr>
                      <tr>
                      <td><h4 class="deptTitle">OFFICE OF THE DEPUTY VICE-CHANCELLOR<br>(ADMINSTRATION & FINANCE)</h4></td><br>

                      </tr><hr>
                    
                         <tr>
                               <strong style="font-size:13px;">DATE GENERATED: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</strong>
                            </td>
                         </tr>
                         <hr>
                        
                         
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               NAME: ${name}
                            </td>
                            <td>
                              PF. NO: ${pf}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                
                <tr class="information">
                <td colspan="2">
                   <table>
                      <tr>
                         <td>
                            HEAD OF : ${headDept} DEPARTMENT
                         </td>
                      </tr>
                   </table>
                </td>
             </tr>
                <tr class="item">
                   <td>Name:</td>
                   <td>${staffName}</td>
                </tr>
                <tr class="item">
                   <td>PF NO.:</td>
                   <td>${staffPf}</td>
                </tr>
                <tr class="item">
                   <td>Email:</td>
                   <td>${email}</td>
                </tr>
                <tr class="item">
                <td>Phone Ext:</td>
                <td>${offExt}</td>
             </tr>
             </tr>
                <tr class="item">
                <td>Mobile Number:</td>
                <td>${phone}</td>
             </tr>
             <tr class="item">
                   <td>Designation:</td>
                   <td>${designation}</td>
                </tr>
                <tr class="item">
                <td>Department:</td>
                <td>${dept}</td>
             </tr>
             <tr class="item">
                   <td>Nature of Employment:</td>
                   <td>${employment}</td>
                </tr>
                <tr class="item">
                <td>Staff Category:</td>
                <td>${staffCat}</td>
             </tr>
             <tr class="item">
                   <td>Job Description:</td>
                   <td>${jobDesc}</td>
                </tr>
                <tr class="item">
                <td>Departmental Objectives:</td>
                <td>${deptObj}</td>
             </tr>
             <tr class="item">
                   <td>Performance Indicator:</td>
                   <td>${pIndicator}</td>
                </tr>
                <tr class="item">
                <td>Units:</td>
                <td>${units}</td>
             </tr>
             <tr class="item">
                   <td>Weight:</td>
                   <td>${weight}</td>
                </tr>
                <tr class="item">
                <td>Targets:</td>
                <td>${target}</td>
             </tr>
             <tr class="item">
                   <td>Total Weight:</td>
                   <td>${totalWeight}</td>
                </tr>
                <tr class="item">
                <td>Explanation of Performance Indicators & Targets:</td>
                <td>${expPerformance}</td>
             </tr>
             <tr class="item">
                   <td>Member of Staff:</td>
                   <td>${memberName}</td>
                </tr>
                <tr class="item">
                <td>Signature:</td>
                <td>${memberSign}</td>
             </tr>
             <tr class="item">
                   <td>Date:</td>
                   <td>${memberDate}</td>
                </tr>
                <tr class="item">
                <td>Head of Department:</td>
                <td>${headDept}</td>
             </tr>
             <tr class="item">
                   <td>Signature:</td>
                   <td>${headSign}</td>
                </tr>
                <tr class="item">
                <td>Date:</td>
                <td>${headDate}</td>
             </tr>
             </table>
             <br />
             
          </div>
       </body>
    </html>
    `;
};