import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopUpForm(props) {
  return (
   
    <div className="container">
      <form>
        <div className="form-group">
          <label for="inputName">Name Of the Vendor</label>
          <input type="text" className="form-control" id="inputName" placeholder="Priya" />
        </div>

        <div className="form-group">
          <label for="inputLocation">Location</label>
          <input type="text" className="form-control" id="inputLocation" placeholder="San Antonio" />
        </div>

        <div className="form-group">
          <label for="inputPhoneNo">Phone Number</label>
          <input type="text" className="form-control" id="inputPhoneNo" placeholder="210 000 0000" />
        </div>

        <div className="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
        </div>

        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
   
  );
}
export default PopUpForm;


