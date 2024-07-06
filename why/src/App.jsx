import { useState } from 'react';
import './App.css'
import CurrencyConverter from './components/CurrencyConverter';
import StockList from './components/StockList';
function App() {
  const[count, setCount] = useState(0);
  return (
    <>
      <h1>Finance Dashboardd</h1>
      <CurrencyConverter />
      
      </>
  )
}

export default App;
