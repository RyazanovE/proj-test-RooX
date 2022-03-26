import React, { useEffect } from "react";
import { setFetchArr } from "./components/store/reducers/fetchArrReducer";
import { useDispatch } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import MyRouter from "../src/components/router/MyRouter";


const App = () => {
  
  return (
    <div className="wrapper">
      <div className="container app-container">
      <Sidebar />
      <MyRouter />
      </div>
    </div>
  );
};

export default App;
