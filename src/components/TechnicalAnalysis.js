import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Iframe(props) {
    return (
        <div dangerouslySetInnerHTML={ 
            {__html:  props.iframe?props.iframe:""}
        } />
    );
  }
function TechnicalAnalysis() {
    const iframe = '<iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/technical-analysis/?locale=en#%7B%22symbol%22%3A%22BTCUSD%22%2C%22showIntervalTabs%22%3Atrue%2C%22interval%22%3A%221m%22%2C%22height%22%3A450%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22validefi.global%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%7D" style="box-sizing: border-box; height: 450px;"></iframe>';
    return (
        <div className='col_iframe scd_width'>
            <h3 className='trandingview'>Technical Analysis</h3>
            <Iframe iframe={iframe} />
        </div>
    )
}

export default TechnicalAnalysis