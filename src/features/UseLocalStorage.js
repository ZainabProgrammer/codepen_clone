import { useState, useEffect } from "react";

const Identifier = "codepen-clone";
const UseLocalStorage = (key, initialValue) => {
  const identifiedKey = Identifier + key;
  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(identifiedKey);
    if (json !== null) return JSON.parse(json);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(identifiedKey, JSON.stringify(value));
  }, [identifiedKey, value]);
  return [value, setValue];
};

export default UseLocalStorage;
