import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioList, portfolioRemover }) {
  const portfolioToDisplay = portfolioList.map((pItem) => {

    function sellHandler(e) {
      e.preventDefault()
      portfolioRemover(pItem)
    }

    return (
      <Stock
        key={pItem.id}
        ticker={pItem.ticker}
        name={pItem.name}
        type={pItem.type}
        price={pItem.price}
        sellHandler={sellHandler}
        inPortfolio={true}
      />
    )
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioToDisplay}
    </div>
  );
}

export default PortfolioContainer;
