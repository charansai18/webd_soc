import React from "react";
import image from './img/illustration.png';
import image1 from './img/illustration1.png';


function About(){
    return(
        <main id="main">

   

    <section id="details" class="details">
      <div className="container">

        <div className="row content">
        
          <div className="col-md-4" data-aos="fade-right">
            <br />
            <img src={image} class="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-4" id="who" data-aos="fade-left">
            <h3>WHO ARE WE</h3>
            <br />
            <p>
            The Web and Design Society of IIT Bhubaneswar has the credit of managing and designing all the websites of the institute and also banners and posters for many events of the institute .
            Though it majorly acts away from the limelight, it transforms its members into creative professionals by equipping them with the skill and art of creating websites and club designs.
             Members of the society actively conduct workshops and competitions for beginners as well as advanced web designers.
             
            </p>
          
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <a href="/Events">
              <span class="button-text">EVENTS</span>
              </a>
            </button>
          </div>
        </div>
        
        <div className="row content" id="content2">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
          <br />
          <br />
            <img src={image1} class="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>WHAT DO WE DO</h3>
            <br />
            <p>
            We basically design various websites for the College body:-Be it Gymkhana, Other societies, websites for various competitions as well as designs posters and informative articles that are quite often required before any major competition or event. Design team of our society has the credit of publishing posters for all the events and competitions across the campus. 
            Design society will helps in improving one’s creativity and master the skill of designing, a must in today's world. In order to do that we will be conducting competitions, workshops, webinars and many more !! Design team has the credit of publishing posters for all the events and competitions across the campus. Design team will help in improving one’s creativity and master the skill of designing, a must in today's world. In order to do that we will be conducting competitions, workshops, webinars and many more!!
            </p>
            
           
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <a href="/Showcase">
              <span class="button-text">SHOWCASE</span>
              </a>
            </button>
          </div>
        </div>
        </div>

        
    </section>

  
    

  </main>
    )
}

export default About;