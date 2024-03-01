import React from 'react'
import '../css/WhaleTrades.css'
import PriceTickers from '../components/PriceTickers'
import DashFooter from '../components/DashFooter'
function SearchTokenData() {
    const[resd,setResd]=useState([]);
    const [search,setSearch]=useState()
    const callApi=()=>{
        if(search){

            fetch(`http://localhost:8080/exchange?bcurrency=${search}`).then((resd)=>resd.json().then(re=>{setResd(re)
        }))
}else{
 alert('Good Morning')
}

    }
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
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        <button type="submit" onClick={callApi}>Submit</button>

            </div>
          </div>
          <DashFooter/>
        </>
    )
}

export default SearchTokenData
