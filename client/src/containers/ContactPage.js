import React, { Component } from 'react';
import ReactGoogleMaps from '../components/GoogleMaps';
import ContactForm from '../components/ContactForm';
import API from '../components/ContactForm/API'

class ContactPage extends Component {

	constructor (props){
		super(props)

		this.state = {
			name: "",
			email: "",
			message: ""
		}

		this.handleInputChange = event => {

      const value = event.target.value;

			const name = event.target.name;

			this.setState({
          [name]: value
      });
    };

		// This is for the submit button:
		this.handleFormSubmit = event => {
			// Stops the page from refreshing:
			event.preventDefault();
			
			this.setState({

			})
		}

	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<ContactForm
							handleInputChange={this.handleInputChange}
							name={this.state.name}
							email={this.state.email}
							message={this.state.message}
						/>
					</div>
					<div className="col-md-6">
						<ReactGoogleMaps />
					</div>
				</div>
			</div>
		)
	}

}

export default ContactPage;
