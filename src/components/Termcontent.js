import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/termcontent.css'



export default function () {
  return (
    <div className='container-fluid Term'>
      <div className="row">
          <div className="col-md-6  term-text">    
              <h1 className='term-heading'>Term Of Use</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aliquid  </p>
            
              </div> 
              <div className="col-md-6">
                  <div className="term-pic">
                      </div>
                  </div>

          </div>
          <div className="row sec-row">
              <div className="col-md-6">
                  <div className='term-banner'></div>
                  </div>
              <div className="col-md-6 term-1">
                  <h1>Generate Terms of Use</h1>
                  <p>With Termify you can easily generate and download your customized and up to date Terms of Use</p>
                  <ul className='term-list'>
                  <i className="fa fa-solid fa-check fa-2x"></i>
                  <ol>Free Updates</ol>
                  <i className="fa fa-solid fa-check fa-2x "></i>
                  <ol>Download Terms of Use (PDF, DOCX, TXT and HTML)  </ol>
                  <i className="fa fa-solid fa-check fa-2x "></i>
                   <ol> Edit and customize manually your policies</ol>
                  <i className="fa fa-solid fa-check fa-2x " ></i>
                  <ol>Termify.io hosts all your policies</ol>
                  </ul>
                  </div>
              </div>
    </div>
  )
}
