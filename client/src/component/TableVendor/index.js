import React,{useContext} from "react";
import "./style.css";
import VendorContext from "../../utils/VendorContext";

function TableVendor(props) {
  const {inputName,inputLocation,inputPhoneNo,inputEmail,handleFormSubmit} = useContext(VendorContext);
  return (
    <table style={{width:"100%"}}>
    {/* <tr>
      <th>Name</th>
      <th>Location</th>
      <th>Phone no</th>
      <th>Email</th>
    </tr> */}
    
    <tr>
      <td>{inputName}</td>
      <td>{inputLocation}</td>
      <td>{inputPhoneNo}</td>
      <td>{inputEmail}</td>
      <td><i className="fas fa-trash"></i></td>
    </tr>
   </table>
  );
}


export default TableVendor;

{/* <table style={{width:"100%"}}>
<tr>
  <th>Name</th>
  <th>Location</th>
  <th>Phone no</th>
  <th>Email</th>
</tr>

<tr>
  <td>Charlie</td>
  <td>Austin</td>
  <td>2107887</td>
  <td>me@gmail.com</td>
  <td><i className="fas fa-trash"></i></td>
</tr>
<tr>
  <td>Katie</td>
  <td>Austin</td>
  <td>2107887</td>
  <td>me@gmail.com</td>
  <td><i className="fas fa-trash"></i></td>
</tr>
<tr>
  <td>Kevin</td>
  <td>Austin</td>
  <td>2107887</td>
  <td>me@gmail.com</td>
  <td><i className="fas fa-trash"></i></td>
</tr>
<tr>
  <td>Chad</td>
  <td>Austin</td>
  <td>2107887</td>
  <td>me@gmail.com</td>
  <td><i className="fas fa-trash"></i></td>
</tr>
<tr>
  <td>Priya</td>
  <td>Austin</td>
  <td>2107887</td>
  <td>me@gmail.com</td>
  <td><i className="fas fa-trash"></i></td>
</tr>
</table> */}








{/* <div className="card" style={{width: "18rem"}}>
<div className="card-header">
 Your Vendors
</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">
    {props.inputName}<t />
    {props.inputLocation}<t />
    {props.inputPhoneNo}<t />
    {props.inputEmail}</li>
</ul>
</div> */}

// import React from "react";
// import "./style.css";

// function VendorListItem(props) {
//     return (
//         <div className="card" style="width: 18rem;">
//             <div className="card-header">
//                 Your Vendors
//         </div>
//             <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                     {props.inputName}<t />
//                     {props.inputLocation}<t />
//                     {props.inputPhoneNo}<t />
//                     {props.inputEmail}
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default VendorListItem;




