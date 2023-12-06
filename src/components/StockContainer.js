import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, portfolioAdder }) {
  const stocksToDisplay = stockList.map((stockItem) => {

    function purchaseHandler(e) {
      e.preventDefault()
      portfolioAdder(stockItem)
    }

    return (
      <Stock
        key={stockItem.id}
        ticker={stockItem.ticker}
        name={stockItem.name}
        type={stockItem.type}
        price={stockItem.price}
        purchaseHandler={purchaseHandler}
        inPortfolio={false}
      />
    )
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
