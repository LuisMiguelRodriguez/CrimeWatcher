import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import  SelectFieldExampleSimple from '../SelectField/SelectField.js'



const Dashboard = ({ secretData }) => (
  <div>
    <SelectFieldExampleSimple />
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
        <div className="row">
                <div className="col-md-4">
                    <h1>HELLO WORLD</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet. Senectus et netus et malesuada fames ac turpis egestas integer.</p>

                </div>
                <div className="col-md-4">
                        <h1>HELLO WORLD</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet. Senectus et netus et malesuada fames ac turpis egestas integer.</p>
                </div>
                <div className="col-md-4">
                        <h1>HELLO WORLD</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet. Senectus et netus et malesuada fames ac turpis egestas integer.</p>
                </div>
            </div>
    </div>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
