import React, { Component } from 'react'
import style from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <div> 
      
<footer className=" text-center text-white text-lg-start w-100 " style={{backgroundColor:"#2c3e50"}}>
  {/* Grid container */}
  <div className="container ">
    {/*Grid row*/}
    <div className={`row py-5 text-center ${style.footerContent}`}>
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
        <h4 className="text-uppercase mb-3 mt-5"> LOCATION</h4>
        <p>
          2215 John Daniel Drive <br/>
          Clark, MO 65243
        </p>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4 ">
        <h4 className="text-uppercase mb-3 mt-5"> AROUND THE WEB</h4>
        <div className={`${style.icons}`}>
      
          {/* Facebook */}
          <a className="btn btn-outline-light btn-floating m-2  d-inline-block  " href="#!" role="button"><i className="fab fa-facebook-f" /></a>
          {/* Twitter */}
          <a className="btn btn-outline-light btn-floating m-2  d-inline-block" href="#!" role="button"><i className="fab fa-twitter" /></a>
          {/* Linkedin */}
          <a className="btn btn-outline-light btn-floating m-2 d-inline-block  "href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
          {/* Google */} 
          <a className="btn btn-outline-light btn-floating m-2 d-inline-block " href="#!" role="button"><i className="fa-brands fa-dribbble" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4  mt-5">
        <h4 className="text-uppercase mb-3">ABOUT FREELANCER</h4>
        <p> Freelance is a free to use, MIT licensed Bootstrap theme created by
          <span><a href="/">
              Start Bootstrap 
            </a></span>.
        </p>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center text-white " style={{backgroundColor:"#1a252f"}}>
    <p  className='p-4'>Copyright © Your Website 2022</p> 
  </div>
  {/* Copyright */}
</footer>

    </div>
    )
  }
}
