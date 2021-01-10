import React from "react";

import form from './forms/contact.php';


function Contact(){
    return(
        <section id="contact" className="contact">
       
        <div className="container">
  
          <div className="section-title">
          <br></br>
          <br></br>
            <center><h2>Contact</h2></center>
            <p></p>
          </div>
  
          <div className="row justify-content-center">
  
           
            <div className="col-lg-6">
              <form action={form} method="post" role="form" class="php-email-form" data-aos="fade-up">
                <div className="form-group">
                  <input placeholder="Your Name" type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <input placeholder="Your Email" type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <input placeholder="Subject" type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
            
  
          </div>
  
        </div>
       
      </section>
    )
   
};

export default Contact;