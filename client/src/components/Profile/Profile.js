import React, { PropTypes } from 'react';
import FindForm from "../Email";





const Profile = ({ secretData }) => (
  <div>
    <div id="dashboard-hero"></div>
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
            <div className="col-md-12">
            </div>
        </div>

    </div>
  <Email />

  </div>
);

Profile.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Profile;
