import { useEffect, useState } from "react";
import './StockList.css' 
function StockList(props){
    const [output,setOutput] =useState(0);
    useEffect(() => {
        fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo'
        )
            // 1. Call the API with the correct method and headers
            .then(res=>res.json())
            // 2. Get the JSON response
            .then(data => setOutput(data.conversion_result)) //inspect console to see what the var is called
            // 3. Call setOutput to store the value
            .catch("")
            // 4. Catch any errors
    }, [
        props.quantity,
        props.purchasePrice,
        props.stockSymbol,
        props.output
        // Dependency Array
        // 5. Think about when you want useEffect to run again
        //    Which variables, when modified, should trigger useEffect?
    ]);

return (<div className="currency-converter-container">
    <div className="outputlist">
<p>No stocks added yet.</p>
<h2>Stock List</h2>
<p><b>Symbol:</b> {props.stockSymbol}</p>
<p><b>Quantity:</b> {props.quantity}</p>
<p><b>Purchase Price:</b> {props.purchasePrice}</p>
<p><b>Current Price:</b> {output}</p>
</div>
</div>
)
}
export default StockList;