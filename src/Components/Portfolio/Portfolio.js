import React, { Component } from 'react'
import style from './Portfolio.module.css'

export default class Portfolio extends Component {
  render() {
    return (
    
    <div className="portfolio py-5 ">
       <div className={`text-center ${style.title}`}>
          <h2 className='text-uppercase mt-5'>portfolio</h2>
         < div className={`  ${style.icon}`}>
          <i className="fa-solid fa-star  mt-3" />
          </div>

        </div>
  <div className="container">
    <div className="portfolio-items">
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6">
          <div className="item">
            <div className={`${style.image }  mb-5`}>
              <img src="images/cabin.png"  alt="img1" />
              <div className= {`${style.overlay} d-flex align-items-center justify-content-center`} >
              <i class="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item">
          <div className={`${style.image }  mb-5`}>
              <img src="images/cake.png" alt="img1" />
              <div className= {`${style.overlay} d-flex align-items-center justify-content-center`} >
              <i class="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item">
          <div className={`${style.image }  mb-5`}>
              <img src="images/circus.png"  alt="img1" />
              <div className= {`${style.overlay} d-flex align-items-center justify-content-center`} >
              <i class="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <div className="item">
          <div className={`${style.image }  mb-5`}>
              <img src="images/game.png" alt="img1" />
              <div className= {`${style.overlay} d-flex align-items-center justify-content-center`} >
              <i class="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-6 ">
          <div className="item">
          <div className={`${style.image }  mb-5`}>
              <img src="images/safe.png"   alt="img1" />
              <div className= {`${style.overlay} d-flex align-items-center justify-content-center`} >
              <i class="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div><div className="col-lg-4 col-md-6 ">
          <div className="item">
          <div className={`${style.image }  mb-5`}>
              <img src="images/submarine.png"   alt="img1" />
              <div className= {`${style.overlay} d-flex align-items-center justify-content-center`} >
              <i class="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    )
  }
}
