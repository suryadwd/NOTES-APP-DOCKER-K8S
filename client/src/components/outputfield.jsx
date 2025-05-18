import axios from "axios";
import React, { useEffect, useState } from "react";

const Outputfield = ({ data }) => {
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg ">
      <h1 className="text-blue-500">
        <ol>
          {data.length === 0 ? (
            <p className="text-black">Add notes</p>
          ) : (
            data.map((item) => {
              return (
                <li
                  key={item._id}
                  className="border text-black px-5 py-1.5 rounded-3xl m-1"
                >
                  {item.content}
                </li>
              );
            })
          )}
        </ol>
      </h1>
    </div>
  );
};

export default Outputfield;
