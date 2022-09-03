import { useState } from "react";
import "./App.css";
import twitterLogo from "./icons/002-twitter.png"
import githubLogo from "./icons/003-github.png"
import linkedinLogo from "./icons/001-linkedin.png"

function App() {
  const [initialPrice, setInitialPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("")
  const [result, setResult] = useState("")

  function onInitialPriceChangeHandler(e) {
    setInitialPrice(e.target.value);
  }
  function onQuantityStocksChangeHandler(e) {
    setStockQuantity(e.target.value);
  }
  function onCurrentPriceChangeHandler(e) {
    setCurrentPrice(e.target.value)
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    const returnMoney = (currentPrice - initialPrice) * stockQuantity
    const percent  = ((returnMoney / initialPrice) * 100).toFixed(2)
    if(returnMoney >= 0) {
      setResult(`Hey, the profit is Rs ${returnMoney} and the profit percent is ${percent}%`)
    } else {
      setResult(`Hey, the loss is Rs ${-(returnMoney)} and the loss percent is ${-percent}%`)
    }
  }

  function resetHandler(e) {
    setInitialPrice("");
    setStockQuantity("");
    setCurrentPrice("")
    setResult("")
  }

  return (
    <>
      <main>
        <h1>Stock Profit/Loss</h1>
        <form onSubmit={onSubmitHandler} onReset={resetHandler}>
          <div className="initialPrice">
            <label htmlFor="initialPrice">Initial Price</label>
            <input
              value={initialPrice}
              onChange={onInitialPriceChangeHandler}
              type="number"
              name="initialPrice"
              id="initialPrice"
            />
          </div>
          <div className="stockQuantity">
            <label htmlFor="stockQuantity">Quantity of Stocks</label>
            <input
              value={stockQuantity}
              onChange={onQuantityStocksChangeHandler}
              type="number"
              name="stockQuantity"
              id="stockQuantity"
            />
          </div>
          <div className="currentPrice">
            <label htmlFor="currentPrice">Current Price</label>
            <input
              value={currentPrice}
              onChange={onCurrentPriceChangeHandler}
              type="number"
              name="currentPrice"
              id="currentPrice"
            />
          </div>
          <div className="buttons">
            <button type="submit">Check</button>
            <button type="reset">Reset</button>
          </div>
        </form>
        {result && <h2>{result}</h2>}
      </main>
      <footer>
        <h6>created by <a href="https://wasimraja.me/portfolio">Wasim Raja</a></h6>
        <ol>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wasim-raja-31857014b/"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="linkedin logo" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/wasim7raja10"
              rel="noreferrer"
            >
              <img src={twitterLogo} alt="twitter logo" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/wasim7raja10"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github logo" />
            </a>
          </li>
        </ol>
      </footer>
    </>
  );
}

export default App;
