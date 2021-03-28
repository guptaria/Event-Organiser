import React,{useState} from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const ModalVendor = () => {

    const [vendorState, setVendorState] = useState(false);
    
    // const handleSubmit = e => {
    //   e.preventDefault();
    
    // };
  
const toggle = () => {
    setVendorState(!vendorState);
}
  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}>Modal</MDBBtn>
      <MDBModal isOpen={vendorState} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          (Tesing Modal)
        </MDBModalBody>
        {/* <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter> */}
      </MDBModal>
    </MDBContainer>
    );
  }


export default ModalVendor;


