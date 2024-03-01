import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/tab_content.css'
function Iframe(props) {
    return (
        <div dangerouslySetInnerHTML={ 
            {__html:  props.iframe?props.iframe:""}
        } />
    );
  }
function PriceTickers() {
    const iframe = '<iframe scrolling="no" class="champolala" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22validefi.global%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D" style="box-sizing: border-box; height: 46px; width: 100%;"></iframe>';
    return (
        <>
            {/* <h3 className='trandingview'>VALIDEX Charting</h3> */}
            <Iframe iframe={iframe} />
        </>
    )
}

export default PriceTickers