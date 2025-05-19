import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import Inputfield from "./components/Inputfield";
import Outputfield from "./components/outputfield";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7000';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/data/receive`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("error in revieving messgae", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <div>
        <header className="text-4xl font-bold text-center mb-8">
          My notes{" "}
        </header>
        <div className="flex flex-col gap-4">
          <Outputfield data={data} />
          <Inputfield torefresh={getData} />
        </div>
      </div>
    </div>
  );
};

export default App;
