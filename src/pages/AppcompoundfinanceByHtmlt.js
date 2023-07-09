import "./AppcompoundfinanceByHtmlt.css";
import Comtable from "./components/Comtable";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/Table";


const AppcompoundfinanceByHtmlt = () => {
  return (
    <div className="appcompoundfinance-by-htmlt">
      <div className="divroot">
        <Header />

        <div className="main">
          <div className="section">
            <div className="divtoken-pair">
              <div className="divtoken-pair-icons">
                <div className="divicon-pair1">
                  <img
                    className="spanasset-icon2"
                    alt=""
                    src="/spanasset2.svg"
                  />
                  <img
                    className="spanasset-icon3"
                    alt=""
                    src="/spanasset3.svg"
                  />
                </div>
              </div>
              <div className="divtoken-pair-info">
                <div className="heading-2">
                  <div className="usdc">USDC</div>
                  <div className="div">|</div>
                  <div className="ethereum">Ethereum</div>
                </div>
                <div className="divtoken-pair-address">
                  <div className="label-0xc3d688b66703497daa19">
                    0xc3d688B66703497DAA19211EEdff47f25384cdc3
                  </div>
                  <img className="link-svg1" alt="" src="/link--svg1.svg" />
                </div>
              </div>
            </div>
            <Comtable />
          </div>
          <Table />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppcompoundfinanceByHtmlt;
