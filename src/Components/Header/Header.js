import React, { Component } from 'react'
import style from './Header.module.css'


export default class Header extends Component {
  render() {
    return (

<div className="text-center py-5 mt-5" style={{backgroundColor:"#1ABC9C"}}>
    <div className="container">
      <div className={` m-auto mt-5 ${style.headerImg}`}>
        <img src="images/avataaars.svg" className='w-100' alt="header img" />
      </div>
      <div className={`${style.headerContent}`}>
        <div className={`  mt-4 ${style.title}`}>
          <h1>START BOOTSTRAP</h1>
         < div className={` text-white ${style.icon}`}>
          <i className="fa-solid fa-star text-white mt-3" />
          </div>

        </div>
        <p className="text-white my-5">Graphic Artist - Web Designer - Illustrator </p> 
      </div>
    </div>
</div>

    )
  }
}
