import { useEffect, useState } from "react";
import './CurrencyStyling.css'
import StockList from "./StockList";




function CurrencyConverter(props){
const[showMessage, setShowMessage] = useState(false);
      function onButtonClickHandler() {
       setShowMessage(true);
      }
    console.log(props.currencyFrom,props.currencyTo);
    const [quantity,setQuantity] =useState("");
    const [purchasePrice,setPrice] =useState("");
    const [stockSymbol,setStockSymbol] =useState("");

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    function handleStockSymbolChange(event) {
        setStockSymbol(event.target.value);
    }
    function handlePriceChange(event) {
        setPrice(event.target.value);
    }

    return (<div className="currency-converter-container">
        <div className="input">
    <input 
    value={stockSymbol} 
  placeholder="Enter Stock Symbol"
  className="converter-input"
  onChange={handleStockSymbolChange}
  >
</input>
<input 
    value={quantity} 
  placeholder="Enter Quantity"
  className="converter-input2"
  onChange={handleQuantityChange}
  >
</input>
<input 
    value={purchasePrice} 
  placeholder="Enter Purchase Price"
  className="converter-input3"
  onChange={handlePriceChange}
  >
</input>
<button 
type="submit" 
className="buttonAdd"
onClick={onButtonClickHandler}
>Add Stock</button>
{showMessage && <StockList purchasePrice={purchasePrice} quantity={quantity} stockSymbol={stockSymbol}/>
}
</div>



</div>
)
}
export default CurrencyConverter;