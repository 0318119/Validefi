import React from 'react'
import '../css/WhaleTrades.css'
import PriceTickers from '../components/PriceTickers'
import DashFooter from '../components/DashFooter'
function SearchTokenData() {
    return (
        <>
             <section className='bannerAdds_whale_trade'></section>
          <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 mt-3'>
                  <PriceTickers />
                </div>
            </div>
            <div className='col-12'>
                <input type="text" />
                
            </div>
          </div>
          <DashFooter/>
        </>
    )
}

export default SearchTokenData
