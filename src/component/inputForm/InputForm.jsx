import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./style.scss";
// import useFetch from "../../hooks/useFetch";
const InputForm = ({ setCity }) => {
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setCity(inputText);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="Input"
        placeholder="Enter Country name..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button>
        <CiSearch />
      </button>
    </form>
  );
};

export default InputForm;
