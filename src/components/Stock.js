import React from "react";

function Stock({ ticker, name, price, purchaseHandler, sellHandler, inPortfolio }) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={inPortfolio ? sellHandler : purchaseHandler}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
