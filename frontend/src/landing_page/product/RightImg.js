import React from "react";

function RightImg({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-2">
            <a
              href={learnMore}
              style={{textDecoration: "none"}}
            >
              Learn More 
              <i class="fa fa-long-arrow-right" aria-hidden="true" style={{marginLeft:"10px"}}></i>
            </a>
          </div>
        </div>
        <div className="col-5 p-5">
          <img src={imageUrl} alt="imagess"></img>
        </div>
      </div>
    </div>
  );
}

export default RightImg;
