import React from "react";
import dollar from '../../assets/icons/dollar.svg'
import burn from '../../assets/icons/burn.svg'
import supply from '../../assets/icons/supply.svg'
import Akashi from '../../assets/images/Akashi.png'
import PriceChart from "./components/PriceChart";

export default function Home() {
  return (
    <div className="home">

      <div className="container">
      <div className="col-12 .d-none d-md-none .d-sm-block  d-flex justify-content-center justify-content-center">
  <img src={Akashi} alt="" />
</div>
        <div className="row akshihome ">
          <div className="col-lg-5  col-12">
            <div className=" App">
            <h2 className="text-center mt-3">Akashi Price</h2>
               <PriceChart />
            </div>
            <div className="box mt-3 mb-2">
            <div className="row justify-content-between">
              <div className="col-lg-12 inner-col col-11 d-flex justify-content-around mt-5">
                <h6>AKASHI Holders</h6>
                <span>1,263</span>
              </div>
              <div className="col-12  d-flex justify-content-center buttons mt-2 d-none d-sm-none d-md-block">
                <button><img src={dollar} alt="" /> Buy</button>&#160;
                <button><img src={burn} alt="" /> Burn</button>&#160;
                <button><img src={supply} alt="" /> Supply</button>
              </div>
            </div>
          </div>
            <div className="col-12 .d-none d-md-none .d-sm-block  d-flex justify-content-center buttons mt-2">
              <button><img src={dollar} alt="" /> Buy</button>&#160;
              <button><img src={burn} alt="" /> Burn</button>&#160;
              <button><img src={supply} alt="" /> Supply</button>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-4   col-11" >
            <div className="box mt-2" >
            <div className="row ">
              <div className="col-12 inner-col d-flex justify-content-around mt-5">
              <h6> Total Supply  </h6>
              <span>500,000,000,000,000 </span>
              </div>
              <div className="col-12 inner-col d-flex justify-content-around mt-2">
              <h6> Liquid Supply </h6>
              <span>15,000,000,000,000</span>
              </div>
            </div>
            </div>
            <div className="box2 mt-4" >
            <div className="row ">
              <div className="col-12 inner-col d-flex justify-content-around mt-4">
              <h6> Total Liquidity  </h6>
              <span>$50,000</span>
              </div>
              <div className="col-12 inner-col d-flex justify-content-around mt-2">
              <h6> Treasury Balance </h6>
              <span>5,000,000,000,000</span>
              </div>
              <div className="col-12 inner-col d-flex justify-content-around mt-2">
              <h6> AKASHI Burned </h6>
              <span>2,000,000</span>
              </div>
              <div className="col-12 inner-col d-flex justify-content-around mt-2">
              <h6> Rewards Distributed </h6>
              <span>200,000,000</span>
              </div>
            
            
            </div>
            </div>
            <div className="box mt-4" >
            <div className="row ">
              <div className="col-12 inner-col d-flex justify-content-around mt-5">
              <h6> AKASHIx Minted  </h6>
              <span>0</span>
              </div>
              <div className="col-12 inner-col d-flex justify-content-around mt-2">
              <h6> AKASHIx Staked</h6>
              <span>0</span>
              </div>
           
            
            
            </div>
            </div>

   
          </div>
          <div className="col-lg-2 col-md-1 col-sm-1 col-1"></div>
        </div>
      </div>

    </div>
  );
}
