import React from 'react'
import OnramperWidget from "@onramper/widget";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/SwapTabs.css'
function BitCoin() {
    return(
    <div  className="onramper_bg">
      <OnramperWidget
        color="#266678"
        defaultAmount={200}
        defaultCrypto="BTC"
        API_KEY="pk_prod_Z6hqcX1y9e2vzDMjNyFsRIVYSu7_5BDyTFRhJbjjZwM0"
      />

    </div>
    )
}

export default BitCoin