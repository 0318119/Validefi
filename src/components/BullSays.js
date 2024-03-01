import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Iframe(props) {
    return (
        <div dangerouslySetInnerHTML={ 
            {__html:  props.iframe?props.iframe:""}
        } />
    );
  }
function BullSays() {
    const iframe = '<iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/timeline/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%2C%22height%22%3A830%2C%22utm_source%22%3A%22validefi.global%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22timeline%22%7D" style="box-sizing: border-box;"></iframe>';
    return (
        <div className='col_iframe'>
            <h3 className='trandingview'>Bull Says</h3>
            <Iframe iframe={iframe} />
        </div>
    )
}

export default BullSays