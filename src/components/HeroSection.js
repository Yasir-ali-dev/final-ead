import { useContext } from "react";
import { MyExamContext } from "../context/FinalExamContext";

export default function HeroSection() {
  const state = useContext(MyExamContext);
  console.log(state);
  return (
    <div>
      <h1>{state.state}</h1>
      <button
        onClick={() => {
          state.setState("hsdf");
        }}
      >
        update
      </button>
    </div>
  );
}
