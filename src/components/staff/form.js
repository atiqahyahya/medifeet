import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
  Col

} from 'react-bootstrap';

import './index.css';


class Staff extends Component {

  render() {
    return (
      <div>
         <Col xs={10} md={3}>
            <Form>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Jane Doe" />
              </FormGroup>
                {' '}

              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email</ControlLabel>
                {' '}
                <FormControl type="email" placeholder="jane.doe@example.com" />
              </FormGroup>
              {' '}

               <FormGroup controlId="formInlineMobileNo">
                <ControlLabel>Mobile Number</ControlLabel>
                {' '}
                <FormControl type="mobileNo" placeholder="0176545240" />
              </FormGroup>
              {' '}

               <FormGroup controlId="formInlineAddress">
                <ControlLabel>Address</ControlLabel>
                {' '}
                <FormControl type="address" placeholder="N0 40, Jalan Tunggal" />
              </FormGroup>
              {' '}

               <FormGroup controlId="formInlineEcontact">
                <ControlLabel>Emergency Contact</ControlLabel>
                {' '}
                <FormControl type="eContact" placeholder="0145879635" />
              </FormGroup>
              {' '}

           <center>
            <p>
              <Button bsStyle="primary">Save</Button>&nbsp;
              <Button bsStyle="default">Cancel</Button>
            </p>
          </center>

          </Form>
        </Col>
      </div>
      );
  }
}

export default Staff;

// in future there have for loop to loop and display staff list