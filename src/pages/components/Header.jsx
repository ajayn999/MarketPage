import React from 'react'

function Header() {
  return (
    <div>
              <div className="header">
          <div className="divheader-content-left">
            <img className="link-svg" alt="" src="/link--svg.svg" />
            <div className="divheader-nav-button-wrapper">
              <div className="spanheader-nav-button-highlig" />
              <div className="link">
                <img className="svg-icon" alt="" src="/svg.svg" />
                <div className="dashboard">Dashboard</div>
              </div>
              <div className="link1">
                <img className="svg-icon1" alt="" src="/svg1.svg" />
                <div className="markets">Markets</div>
              </div>
              <div className="link2">
                <img className="svg-icon2" alt="" src="/svg2.svg" />
                <div className="markets">Extensions</div>
              </div>
              <div className="link3">
                <img className="svg-icon1" alt="" src="/svg3.svg" />
                <div className="vote">Vote</div>
              </div>
            </div>
          </div>
          <div className="divheader-buttons">
            <div className="divbutton">
              <div className="divicon-pair">
                <img className="spanasset-icon" alt="" src="/spanasset.svg" />
                <img className="spanasset-icon1" alt="" src="/spanasset1.svg" />
              </div>
              <div className="label-usdc">USDC</div>
              <div className="label-ethereum">Ethereum</div>
              <img className="label-svg" alt="" src="/label--svg.svg" />
            </div>
            <div className="divbutton1">
              <div className="label-connect">Connect Wallet</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
