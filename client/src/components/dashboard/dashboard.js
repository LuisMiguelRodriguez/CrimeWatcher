import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import  SelectFieldExampleSimple from '../SelectField/SelectField.js'
import FindForm from "../findform";





const Dashboard = ({ secretData }) => (
  <div>
    <div id="dashboard-hero">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      }
      <br />
      <FindForm/>
    </div>

  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
