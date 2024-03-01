
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Textpdfs.css'
import React from 'react'

function TextPdf() {
  return (
    <>
    <Header />
    <section className='cer_borders'>
        <div className='container'>
            <div className='row margin_Validefi justify-content-center'>
                <div className='col-lg-12'>
                    <h4 className='cer_validefi'>Validefi License and Certificate</h4>
                    <div className='btn_banner lala'>
                        <a className='valid_color' href="https://validefi.global/pdf/VALIDEFI-NETWORK.pdf" target='_blank'><button className='btn_two scd_btn'>VALIDEFI NETWORK</button></a>
                        <a className='valid_color' href="https://validefi.global/pdf/STATE-CORPORATION.pdf" target='_blank'><button className='btn_two scd_btn'>STATE CORPORATION COMMISSION</button></a>
                        <a className='valid_color' href="https://validefi.global/pdf/Validefi_Logo_Copywrite_-_Ownership.pdf" target='_blank'><button className='btn_two scd_btn'>Validefi Logo Ownership</button></a>
                        <a className='valid_color' href="https://validefi.global/pdf/Technical_Analysis_Charts_License_Agreement_docx_Google_Docs.pdf" target='_blank'><button className='btn_two scd_btn'>Technical Analysis Charts License</button></a>
                        <a className='valid_color' href="https://validefi.global/pdf/BE16356602-16828130-MISC.pdf" target='_blank'><button className='btn_two scd_btn'>VIRGINIA STATE CORPORATION</button></a>
                        <a className='valid_color' href="https://validefi.global/pdf/BE16356602-16828130-REC.pdf" target='_blank'><button className='btn_two scd_btn'>RECEIPT CORPORATION</button></a>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default TextPdf