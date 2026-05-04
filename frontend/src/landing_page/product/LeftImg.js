import React from "react";

function LeftImg({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageUrl} alt="productImage" />
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p style={{fontSize:""}}>{productDescription}</p>
          <div className="p-3">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft: "50px",textDecoration:"none" }}>
              Learn More<i class="fa fa-long-arrow-right" aria-hidden="true" style={{marginLeft:"10px"}}></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/media/googlePlayBadge.svg" alt="GooglePlay" />
            </a>
            <a href={appStore}>
              <img
                src="/media/appstoreBadge.svg"
                alt="AppleStore"
                style={{ marginLeft: "50px" }}
              />
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;
