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
			<div className="masthead-full">
				<div className="container contact">
					<div className="row" id="contactheadline">
						<div className="col-md-12">
							<h2> We'd <i className="icon-heart"></i> to hear from you</h2>
							<p>We like to hear your feedback to see how we can improve your app and how it has helped you</p>
						</div>
					</div>

					<div className="row contact-form">
						<div className="col-md-6">

								<ContactForm
									handleInputChange={this.handleInputChange}
									name={this.state.name}
									email={this.state.email}
									message={this.state.message}
								/>
						</div>
						<div className="col-md-6 section-content ">
							<h3 className="section-header">How To Find Us</h3>
							<p className="address">Univeristy of California Extenstion Center<br></br>510 E Peltason Dr.<br></br> Irvine, CA 92697</p>
							<ReactGoogleMaps />
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default ContactPage;
