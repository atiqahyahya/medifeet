import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form

} from 'react-bootstrap';

import './index.css';


class Staff extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
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
            <Button type="submit"  bsStyle="primary">
              Save
            </Button>
          </center>

          <center>
            <Button type="submit">
            Cancel
            </Button>
          </center>

        </Form>
      </div>
      );
  }
}

export default Staff;

// in future there have for loop to loop and display staff list