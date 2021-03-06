import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignupPage.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class SignLoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };

    this.handleChange = (value) => {
      this.setState({
        value: value,
      });
    };
  }



  render() {
    return (
      <header className="masthead-full">
          <div id="login-signup">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              inkBarStyle={{
                backgroundColor:
                "white"}
              }
            >
              <Tab label="Signup" value="a" >
                <div>
                  <SignUpPage />
                </div>
              </Tab>
              <Tab style={{color:'white'}}label="Log In" value="b">
                <div>
                  <LoginPage/>
                </div>
              </Tab>
            </Tabs>
          </div>
      </header>
    );
  }
}

export default SignLoginPage
