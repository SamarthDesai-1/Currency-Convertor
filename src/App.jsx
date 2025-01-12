import './App.css'
import { useRef } from 'react'

async function request(Amount) {

  const From = "CAD";
  const To = "INR";

  var myHeaders = new Headers();
  myHeaders.append("apikey", "0uPyOye6XlNR5y2ENHKc0t9qFhQlVvAm");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };


  fetch(`https://api.apilayer.com/currency_data/convert?to=${To}&from=${From}&amount=${Amount}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(`From ${From} to ${To} is : ${result.result}`))
}

function App() {

  const inputOne = useRef();
  return (
    <>
      <input type="text" ref={inputOne} placeholder='Enter covert amount' />
      <br />
      <button onClick={() => request(inputOne.current.value)}>Translate</button>
    </>
  )
}

export default App;