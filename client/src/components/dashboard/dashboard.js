import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import  SelectFieldExampleSimple from '../SelectField/SelectField.js'
import FindForm from "../findform";





const Dashboard = ({ secretData }) => (
  <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="title">Crime Watcher Results</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 image">
            </div>
        </div>

    </div>
  <FindForm/>

  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
