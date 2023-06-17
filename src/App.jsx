import "./App.css";
import Form from "./Components/Form";
import Data from "./Components/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState} from "react";
export const DataContext = createContext();
function App() {
  const [data, setData] = useState([
    {
      FullName: "Name1",
      File: "RESUME",
      Technology: ["HTML", "CSS"]
    },
    {
      FullName: "Name2",
      File: "CV",
      Technology: ["MERN,REACTJS"]
    }
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DataContext.Provider
              value={{ entries: data, updateFunction: setData }}
            >
              <Form />
            </DataContext.Provider>
          }
        ></Route>

        <Route
          path="/data"
          element={
            <DataContext.Provider
              value={{ entries: data, updateFunction: setData }}
            >
              <Data />
            </DataContext.Provider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
