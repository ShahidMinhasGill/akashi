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
      <div className="col-12 small-logo .d-none d-md-none .d-sm-block  d-flex justify-content-center justify-content-center">
        <img src={Akashi} alt="" />
      </div>
        <div className="row akshihome ">
          
          <div className="col-lg-5   col-9">
            <div className=" App">
            <h2 className="text-center mt-3">Akashi Price</h2>
               <PriceChart />
            </div>
            <div className="box mt-5 mb-2">
            <div className="row justify-content-between">
              <div className="col-lg-12 inner-col2   mt-5">
                <h6>AKASHI Holders</h6>
                <span>1,263</span>
              </div>
              
              <div className="col-12  d-flex justify-content-center buttons mt-2 d-none d-sm-none d-md-block">
                <button style={{cursor:'default'}}><img src={dollar} alt="" />Buy</button>&#160;
                <button style={{cursor:'default'}}><img src={burn} alt="" />Burn</button>&#160;
                <button style={{cursor:'default'}}><img  src={supply} alt=""  className="img2"/> Supply</button>
              </div>
            </div>
          </div>
            <div className="col-12 mb-2 .d-none d-md-none .d-sm-block  d-flex justify-content-center buttons mt-4">
              <button style={{cursor:'default'}}><img src={dollar} alt="" /> <strong className="btn-text">Buy</strong></button>&#160;
              <button style={{cursor:'default'}}><img src={burn} alt="" /> <strong className="btn-text">Burn</strong> </button>&#160;
              <button style={{cursor:'default'}}><img src={supply} alt="" className="img2" /> <strong className="btn-text">&#160; Supply</strong> </button>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-4   col-9" >
            <div className="box " >
            <div className="row ">
              {/* <div className="col-6 p-5">
              <p className="heading"> Total Supply  </p>
              <p className="heading"> Liquid Supply  </p>
              </div>
              <div className="col-6 text-end p-5">
              <p 
              > 500,000,000,000,000</p>
              <p 
              > 15,000,000,000,000 </p>
              </div> */}
              <div className="col-12 inner-col mt-4">
              <h6> Total Supply  </h6>
              <span>500,000,000,000,000 </span>
              </div>
              <div className="col-12 inner-col  ">
              <h6> Liquid Supply </h6>
              <span>15,000,000,000,000</span>
              </div>
            </div>
            </div>
            <div className="box2 mt-4" >
            <div className="row ">
              {/* <div className="col-lg-6 col-12 p-5">
              <p className="heading"> Total Liquidity  </p>
              <p className="heading"> Treasury Balance  </p>
              <p className="heading"> AKASHI Burned  </p>
              <p className="heading"> Rewards Distributed  </p>
              </div>
              <div className="col-lg-6 col-12 text-end p-5">
              <p>$50,000</p>
              <p>5,000,000,000,000</p>
              <p>2,000,000</p>
              <p>200,000,000</p>
              </div> */}
              <div className="col-12 inner-col  mt-4">
              <h6> Total Liquidity  </h6>
              <span>$50,000</span>
              </div>
              <div className="col-12 inner-col  mt-2">
              <h6> Treasury Balance </h6>
              <span>5,000,000,000,000</span>
              </div>
              <div className="col-12 inner-col  mt-2">
              <h6> AKASHI Burned </h6>
              <span>2,000,000</span>
              </div>
              <div className="col-12 inner-col  mt-2">
              <h6> Rewards Distributed </h6>
              <span>200,000,000</span>
              </div>
            
            
            </div>
            </div>
            <div className="box mb-2 mt-4" >
            <div className="row ">
            {/* <div className="col-6 p-5">
              <p className="heading"> AKASHIx Minted  </p>
              <p className="heading"> AKASHIx Staked  </p>
              </div>
              <div className="col-6 text-end p-5">
              <p 
              > 0</p>
              <p 
              > 0 </p>
              </div> */}
              <div className=" inner-col   mt-4">
              <h6> AKASHIx Minted  </h6>
              <span>0</span>
              </div>
              <div className=" inner-col  mt-2">
              <h6> AKASHIx Staked</h6>
              <span>0</span>
              </div>
           
            
            
            </div>
            </div>

   
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
        </div>
      </div>

    </div>
  );
}
