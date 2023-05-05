import React from "react";
import aboutbiliding from '../../assets/images/aboutbiliding.png'
import dollar from '../../assets/icons/dollar.svg'

export default function Home() {
  return (
    <div className="home">

      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-11">
            <div className="loan-image">
              <img
                src={aboutbiliding}
                alt="loan"
              />
            </div>
            <div className="box mt-3" >
            <div className="row ">
              <div className="col-12 d-flex justify-content-around mt-5">
              <h6> AKASHI Holders  </h6>
              <span>1,263</span>
              </div>
              <div className="col-12 d-flex justify-content-center buttons mt-2">
              <button> <img src={dollar} alt="" /> Buy</button>&#160;
              <button>Burn</button>&#160;
              <button>Supply</button>
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-4  col-md-6 col-sm-6 col-12" >
            <div className="box" >
            <div className="row ">
              <div className="col-12 d-flex justify-content-around mt-5">
              <h6> Total Supply  </h6>
              <span>500,000,000,000,000 </span>
              </div>
              <div className="col-12 d-flex justify-content-around mt-2">
              <h6> Liquid Supply </h6>
              <span>15,000,000,000,000</span>
              </div>
            </div>
            </div>
            <div className="box2 mt-4" >
            <div className="row ">
              <div className="col-12 d-flex justify-content-around mt-4">
              <h6> Total Liquidity  </h6>
              <span>$50,000</span>
              </div>
              <div className="col-12 d-flex justify-content-around mt-2">
              <h6> Treasury Balance </h6>
              <span>5,000,000,000,000</span>
              </div>
              <div className="col-12 d-flex justify-content-around mt-2">
              <h6> AKASHI Burned </h6>
              <span>2,000,000</span>
              </div>
              <div className="col-12 d-flex justify-content-around mt-2">
              <h6> Rewards Distributed </h6>
              <span>200,000,000</span>
              </div>
            
            
            </div>
            </div>
            <div className="box mt-4" >
            <div className="row ">
              <div className="col-12 d-flex justify-content-around mt-5">
              <h6> AKASHIx Minted  </h6>
              <span>0</span>
              </div>
              <div className="col-12 d-flex justify-content-around mt-2">
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
