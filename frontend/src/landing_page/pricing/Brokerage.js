import React from "react";

function Brokerage() {
  return (
    <div className="container ">
      <div className="row p-5 mb-5 mt-5 text-center border-top">
        <div className="col-8 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul style={{textAlign:"left",lineHeight:"2.5", fontSize:"12px"}} className="text-muted">
            <li>Call &Trade and RMS auto-squareoff;Additional charges of 50 +GST per
            order.</li>
            <li>Digital contract notes will be sent via e-mail.</li> 
            <li>Physicalcopies of contract notes, if required,shall be charged 20 percontract note. courier charge apply.</li>
            <li>For NRI account(non-PIS),0.5% or100 per executed order for equity (whichever is lower).For NRI account (PIS),0.5% or 200 per executed order for equity (whicheveris lower).</li>
            <li>If the account is in debit balance,any order placed willbe charged 40 per executed order instead of 20 per executed order.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
