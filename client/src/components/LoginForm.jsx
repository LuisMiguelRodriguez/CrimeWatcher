import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <div className="form-container" >
    <Card className="container ">
      <div className="card-container">
        <form action="/" onSubmit={onSubmit}>
          <br />
          <br />
          <h3 className="card-heading">Login</h3>
          <br />


          {successMessage && <p className="success-message">{successMessage}</p>}
          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              style={{'text-align':'center'}}
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>

          <div className="field-line">

            <TextField
              style={{'text-align':'center'}}
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>
          <br/>
          <br/>
          <div className="button-line">
            <RaisedButton type="submit" label="Log in" primary />
          </div>

          <br />
          <br />
        </form>
      </div>
    </Card>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
