import { Component } from "react";
import {  Redirect } from 'react-router-dom';
import '../../css/aboutus.css'

class AboutUs extends Component{
    render(){
      return(
        <>
    <section id="header" className="d-flex align-items-center">
     <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-12 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column" style={{marginTop:"200px"}}>
                      <h1>
                      WE ARE THERE FOR YOU EVERY STEP OF THE WAY. <strong className="brand-name">RoojGaar.com</strong>
                      </h1>
                      <h2 className="my-3">
                      We are There Because we Care.
                      </h2>
                      <div className="mt-3">
                        <a className="btn-get-started " href="/contact">Contact Us</a>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img" >
                      <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630147557/about_paolqy.gif" className="img-fluid animated" alt="home img"/>
                  </div>
                </div>
            </div>
        </div>
    </div>
     </section>


    <div class="find-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Our Location on Maps</h2>
            </div>
          </div>
          <div class="col-md-8">

            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.390227318508!2d85.32722711501536!3d27.70523538279273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0a7230f43%3A0x18e4d56d8c3ab0a9!2sSoftwarica%20College!5e0!3m2!1sen!2snp!4v1617353557261!5m2!1sen!2snp" width="100%" height="330px" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-md-4">
            <div class="left-content">
              <h4>About RoojGaar.com</h4>
              <h7>RoojGaar.com was developed by Softwarican Student in 2020/21 as open source software, to provide a solution enabling worker, curators and others to create attractive, feature-rich websites that highlight digital collections. 
              <br/><br/>This has facilitated its adoption by many universities as a primary digital exhibit platform. In turn, E-Library benefits from community sharing of inspiration, design and code.</h7>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
  </>
      )
    }
}
export default AboutUs;
