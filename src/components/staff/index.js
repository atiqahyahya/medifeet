import React, { Component } from 'react';
import {
  //Button,
  //FormGroup,
  //FormControl,
  //ControlLabel,
  Table,

} from 'react-bootstrap';

import './index.css';

class Staff extends Component {
	constructor(props) {
	    super(props);
	}

  render() {
    return (
      <div>
      	<h1>Staff</h1>
			<Table striped bordered condensed hover>
				    <thead>
				      <tr>
				        <th>#</th>
				        <th>First Name</th>
				        <th>Last Name</th>
				        <th>Mobile Number</th>
				        <th>Address</th>
				        <th>Emergency Contact</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>1</td>
				        <td>Mark</td>
				        <td>Otto</td>
				        <td>@mdo</td>
				        <td>asasas</td>
				        <td>017</td>
				      </tr>
				      <tr>
				        <td>2</td>
				        <td>Jacob</td>
				        <td>Thornton</td>
				        <td>@fat</td>
				        <td>asasa</td>
				        <td>012</td>				     
				      </tr>
				      <tr>
				        <td>3</td>
				        <td>say</td>
				        <td>Larry the Bird</td>
				        <td>@twitter</td>
				        <td>swdg</td>
				        <td>014</td>
				      </tr>
				    </tbody>
			</Table>   	
      </div>
    );
    
  }
}

export default Staff;