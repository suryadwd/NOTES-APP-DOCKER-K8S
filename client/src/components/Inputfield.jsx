import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:7000";

const Inputfield = ({ torefresh }) => {
  const [data, setData] = useState("");

  const handleButtonClick = async () => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/data/send`,
        { content: data },
        { withCredentials: true }
      );
      console.log(res);
      torefresh();
    } catch (error) {
      console.log("error in Inputfield button send ", error);
    }
  };

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <div className="bg-white text-black    rounded-lg ">
        <div className="flex gap-2">
          <input
            type="text"
            onChange={handleInputChange}
            value={data}
            className="border-2 border-gray-300 rounded-lg px-10 py-1.5 focus:outline-none focus:border-blue-500"
            placeholder="Your notes..."
          />
          <button
            type="submit"
            onClick={handleButtonClick}
            className="bg-green-600  px-12 py-2.5 rounded-lg hover:bg-green-700"
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputfield;
