import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([])
  const [portfolioList, setPortfolioList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((x) => setStockList(x))
  }, [])

  function portfolioAdder(stockItem) {
    setPortfolioList([...portfolioList, stockItem])
  }

  function portfolioRemover(pItem) {
    let newPortfolioList = portfolioList.filter((item) => item.name !== pItem.name)
    setPortfolioList(newPortfolioList)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} portfolioAdder={portfolioAdder}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} portfolioRemover={portfolioRemover}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
