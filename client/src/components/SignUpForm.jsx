import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  underlineFocusStyle: {
borderBottom: 'solid 1px',
width: 'calc(100% - 5px)'
}
}

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div >
    <Card className="container">
      <div className="card-container">
        <form action="/" onSubmit={onSubmit}>
          <h2 className="card-heading ">Sign Up</h2>

          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Name"
              name="name"
              errorText={errors.name}
              onChange={onChange}
              value={user.name}
              style ={{width: '100%'}}
              inputStyle ={{width: '100%'}}
              underlineFocusStyle={styles.underlineFocusStyle}

            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
              fullWidth={true}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
              fullWidth={true}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Create New Account" primary />
          </div>

          <br />
          <br />

        </form>
      </div>
    </Card>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
