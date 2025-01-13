import { useRef } from "react";
import NextLiner from "./NextLiner";

export default function InputText({ setInput }) {

  const text = useRef();

  return (
    <>
      <input type="text" ref={text} className="inputBox" />

      <NextLiner></NextLiner>

      <button onClick={() => setInput(text.current.value)}>Rate</button>
    </>
  )
}