import React from 'react'
import  pic from "../images/qrCode.png"
import "./Qr.css";

const Qr = () => {
  return (
    

    <>


    <div className='board'>
    <div className="outer-area">
        <div className="img">
            <img src={pic} alt="my pic" /><a href="https://www.frontendmentor.io/home"/></div>
        <div className="heading">Improve your front-end skills by building projects</div>
        <div className="para">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
    </div>
    </div>


    <footer className='footer'>
       <p>Made by @ </p> <span>Rishabh Sahni</span>
    </footer>
    </>
  )
}

export default Qr
