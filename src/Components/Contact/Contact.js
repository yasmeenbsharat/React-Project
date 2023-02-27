import React, { Component } from 'react'
import style from './Contact.module.css'
export default class Contact extends Component {
  render() {
    return (
      <div>
          <section className={`py-5 `}>
          <div className={`text-center mt-5 ${style.title}`}>
              <h2 className='text-uppercase mb-3'>CONTACT ME</h2>
              <div className={`${style.icon} mb-4`}>
              <i className="fa-solid fa-star " />
            </div>
            </div>
            
            <div className="container w-50 pb-3 ">
              <form  className= {`${style.contant}`}>
                <div className="form-group ">
                  <input type="text" className="form-control  border-0  border-bottom pt-4 mb-5" placeholder="Full Name" />
                </div>
                <div className="form-group ">
                  <input type="number" className="form-control border-0  border-bottom pt-4 mb-5" placeholder="Phone Number" />
                </div>
                <div className="form-group ">
                  <input type="email" className="form-control border-0  border-bottom pt-4 mb-5" placeholder="Email Address" />
                </div>
                <div className="form-group " >
                  <textarea className="form-control border-0  border-bottom p-y mb-3" placeholder="Message" rows={5} defaultValue={""} />
                </div>
                <button type="submit" className='p-4 border-0 '>Send</button>
              </form>
            </div>
          </section>

       
        </div>
    )
  }
}
