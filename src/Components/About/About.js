import React, { Component } from 'react'
import style from './About.module.css'
export default class About extends Component {
  render() {
    return (
      <div>
        <section className= {` text-white  py-5 ${style.about}`}>
            <div className="container">
              <div className={`text-center mt-4 ${style.title}`}>
              <h2 className='text-uppercase mt-5'>ABOUT</h2>
              <div className={`${style.icon} mb-4`}>
              <i className="fa-solid fa-star " />
            </div>
            </div>
              <div className= {` text-white m-auto row py-3 ${style.aboutContent}`}>
                <div className="col-md-6">
                  <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                  <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
                <a href='/' className='m-auto d-inline-block p-3 mt-3 '> <i className="fa-solid fa-download btn" /> <span>free download !</span></a>
              </div>
          
              </div>
             
  </section>

        </div>
    )
  }
}
