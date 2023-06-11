import { createContext } from "react";
import UseLocalStorage from "./UseLocalStorage";
export const Context = createContext();

const Provider = ({ children }) => {
  const [html, sethtml] = UseLocalStorage("html", "");
  const [js, setjs] = UseLocalStorage("js", "");
  const [css, setcss] = UseLocalStorage("css", "");
  return (
    <Context.Provider
      value={{
        html,
        sethtml,
        js,
        setjs,
        css,
        setcss,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
