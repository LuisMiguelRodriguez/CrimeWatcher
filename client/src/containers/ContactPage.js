import React from 'react';

const ContactPage = () => (
  <section id="contact">
		<div className="section-content">
			<h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
			<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
		</div>
		<div className="contact-section">
			<div className="container">
				<form id="contact-form">
					<div className="col-md-12 form-line">
		  			<div className="form-group">
		  				<label for="exampleInputUsername">Your name</label>
				    	<input type="text" className="form-control" id="" placeholder=" Enter Name"/>
			  		</div>
			  		<div className="form-group">
				    	<label for="exampleInputEmail">Email Address</label>
				    	<input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id"/>
				  	</div>
		  		</div>
		  		<div className="col-md-12">
		  			<div className="form-group">
		  				<label for ="description"> Message</label>
		  			 	<textarea  className="form-control" id="description" placeholder="Enter Your Message"></textarea>
		  			</div>
		  			<div>
		  				<button type="button" className="btn btn-default submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
		  			</div>
				  </div>
			  </form>
		  </div>
    </div>
	</section>
);

export default ContactPage;
