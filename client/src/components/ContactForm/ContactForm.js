import React from 'react'

const ContactForm = props => (

  <section>
    <div className="section-content">
      <h3 className="section-header">How To Reach Us</h3>
      <p className="address">Fill out the form below!</p>
    </div>
    <div className="contact-section">
      <div className="container">
        <form id="contact-form">
          <div className="col-md-12 form-line">
          <div className="form-group">
            <label for="exampleInputUsername">Your name</label>
            <input
              value={props.name}
              name={'name'}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail">Email Address</label>
            <input
              value={props.email}
              name={'email'}
              onChange={props.handleInputChange}
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder=" Enter Email id"/>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label for ="description"> Message</label>
            <textarea
              name={'message'}
              value={props.message}
              onChange={props.handleInputChange}
              className="form-control"
              id="description"
              placeholder="Enter Your Message"></textarea>
          </div>
          <div>
            <button type="button" className="btn .btn-xl" id="contactbtn"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  </section>

)

export default ContactForm
