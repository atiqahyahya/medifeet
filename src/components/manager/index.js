import React, { Component } from 'react';
import {
  Table,

} from 'react-bootstrap';

import './index.css';

class Manager extends Component {

  render() {
    return (
      <div>
      	<h1>Manager</h1>
			<Table boarder="0" width="75%" cellpadding="20" bgcolor="white" align="center">
				    <thead>
				      <tr>
				        <th>#</th>
				        <th>First Name</th>
				        <th>Last Name</th>
				        <th>Username</th>
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
				      </tr>
				      <tr>
				        <td>2</td>
				        <td>Jacob</td>
				        <td>Thornton</td>
				        <td>@fat</td>
				      </tr>
				      <tr>
				        <td>3</td>
				        <td colSpan="2">Larry the Bird</td>
				        <td>@twitter</td>
				      </tr>
				    </tbody>
			</Table>   	
      </div>
    );
    
  }
}

export default Manager;


