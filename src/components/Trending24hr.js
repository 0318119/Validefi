import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Iframe(props) {
    return (
        <div dangerouslySetInnerHTML={ 
            {__html:  props.iframe?props.iframe:""}
        } />
    );
  }
function Trending24hr() {
    const iframe = '<iframe allowtransparency="true" allowfullscreen style="box-sizing: border-box; width: 100%;" src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22market%22%3A%22crypto%22%2C%22showToolbar%22%3Atrue%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22validefi.global%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D" frameborder="0"></iframe>';
    return (
        <div className='col_iframe scd_width'>
            <h3 className='trandingview'>Trending24hr</h3>
            <Iframe iframe={iframe} />
        </div>
    )
}

export default Trending24hr