import './App.css'
import { useRef, useState } from 'react'
import InputText from '../Components/InputText';
import Response from '../Components/Response';

export default function App() {

  const [input, setInput] = useState(1);
  const [output, setOutput] = useState(0);

  const inputOne = useRef();

  const From = "CAD";
  const To = "INR";

  var myHeaders = new Headers();
  myHeaders.append("apikey", "0uPyOye6XlNR5y2ENHKc0t9qFhQlVvAm");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };


  fetch(`https://api.apilayer.com/currency_data/convert?to=${To}&from=${From}&amount=${input}`, requestOptions)
    .then(response => response.json())
    .then(result => setOutput(result.result))


  return (
    <>
    
      <h1>Curreny Convertor</h1>
      <InputText setInput={setInput}></InputText>
      <Response output={output}></Response>

    </>
  )
}





console.log();



