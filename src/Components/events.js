import React , { Component } from 'react';
import styles from './events.css'
import Header from "./Header";
import Footer from "./Footer"

class Top extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };
    render(){
        return(
            <div className='row align-items-center' style={{height :'100vh'}} >
                <div className='col-12 col-lg-6'>
                <br />
                <br />
                <br />
                  <h1 className='d-flex justify-content-center' style={{color:'#fe3265',fontSize:'85px'}}>EVENTS</h1>
                </div>
                <div className='col-12 col-lg-6'>
                <img width="100%" src='assets/img/events.jpg' alt="For example" />
                </div>
              </div>
        );
    }
}
class Middle extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };
    render(){
        return(
          <React.Fragment>
              <div className='row'>
              <div className='col-12'>
              <h1 className='d-flex justify-content-center' style={{color:'#fe3265',fontSize:'3vw'}}>UPCOMING EVENTS</h1>
              <p className='d-flex justify-content-center' style={{color:'#fe3265',fontSize:'2vw'}}> Check out the upcoming events we have in store for you!</p>
              </div>
              </div>
          </React.Fragment>
        );
    }
} 
class Bottom extends Component{
    constructor(props){
        super(props);
        this.state={
                events : [
                    {
                        id:0,
                        date:'Dec - Jan',
                        heading: 'Online Workshop',
                        subheading: 'Open Workshop',
                        matter: 'Covers right from the basic to an advanced Nodejs Level.',
                    },
                    {
                        id:1,
                        date:'27th Oct - 26th Nov',
                        heading: 'CreatiWFacts',
                        subheading: 'Open Event',
                        matter: 'An online event in which the society posts the basic functions and usage of all the photoshop tools.',
                    },
                    {
                        id:2,
                        date:'11th Nov - 15th Nov',
                        heading: 'Digital Arts Competition',
                        subheading: 'Open Competition',
                        matter: 'The society organises a design competition on the occasion of National Education Day.',
                    },
                    {
                        id:3,
                        date:'27th June',
                        heading: 'Web UI Workshop',
                        subheading: 'Closed Webinar',
                        matter: 'A webinar conductd in collaboration with Eeveno. The webinar covers Basics of Prototyping, Responsive grids, components states and naming conventions.',
                    },
                    {
                        id:4,
                        date:'21st May - 1st June',
                        heading: 'Online Workshop on PHP MySQL',
                        subheading: 'Open Workshop',
                        matter: 'A 12 day online workshop in which the members post the resources sufficient enough to gain basic knowledge on HTML, CSS, Bootstrap, PHP and MySQL.',
                    }, 
                ]
        };
    };
    render(){
        const events = this.state.events.map((event) => {
            return(
                <div key={event.id} className='col-12 col-lg-12'>
                    <div className='cen'>
                    <div className='row align-items-center p-4'>
                        <div className='offset-lg-1 col-5 col-lg-4'>
                           <h1 className='d-flex justify-content-center' style={{color:'#fe3265',fontSize:'3vw'}}> {event.date}</h1>
                        </div>
                        <div className='col-1 col-lg-1 vertical'></div>
                        <div className='col-6 col-lg-4'>
                            <h1 style={{color:'#fe3265',fontSize:'2.5vw'}}>{event.heading}</h1><br/>
                            <p style={{color:'#696969',fontSize:'1vw'}}><b style={{color:'white',fontSize:'1.5vw'}}>{event.subheading}</b><br/>{event.matter}</p> 
                        </div>
                    </div>
                    <div className='offset-lg-1 offset-1 col-10 col-lg-9' style={{backgroundColor:'white'}}>

                    </div>
                    </div>
                </div>
            )
        })
        return(
            <React.Fragment>
                <div className='row'>
                    {events}
                </div>
            </React.Fragment>
        );
    }
}
class Event extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Top />
                <Middle />
                <Bottom />
                <Footer />
            </React.Fragment>
        );
    }
}
export default Event;
