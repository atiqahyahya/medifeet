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
import NavBar from '../global/header'


class Item extends Component {

  render() {
    return (
      <div>
          <NavBar />
         <Col xs={10} md={3}>

         	<center>
		      	<h1>ITEM</h1>
		    </center>

            <Form>
              <FormGroup controlId="formInlineID">
                <ControlLabel>ID</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="F2580-1" />
              </FormGroup>
                {' '}

              <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>
                {' '}
                <FormControl type="name" placeholder="Fairlady" />
              </FormGroup>
              {' '}

               <FormGroup controlId="formInlineColour">
                <ControlLabel>Colour</ControlLabel>
                {' '}
                <FormControl type="colour" placeholder="white" />
              </FormGroup>
              {' '}

               <FormGroup controlId="formInlineSize">
                <ControlLabel>Size</ControlLabel>
                {' '}
                <FormControl type="size" placeholder="Uk 5" />
              </FormGroup>
              {' '}

               <FormGroup controlId="formInlinePrice">
                <ControlLabel>Price</ControlLabel>
                {' '}
                <FormControl type="price" placeholder="RM 169" />
              </FormGroup>
              	{' '}

              <FormGroup controlId="formInlineStock">
                <ControlLabel>Number of stock</ControlLabel>
                {' '}
                <FormControl cd type="stock" placeholder="10" />
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

export default Item;

