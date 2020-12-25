import React, { useState, useEffect } from "react";
import "./Poll.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import instance from "./axios";
export default function Poll({ id, title }) {
  const [{ array }, dispatch] = useStateValue();
  const [newData, setData] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await instance.get(`/intern/result/${id}`);
      setData(res.data.payload);
    }
    getData();
  }, [flag]);

  function addToArray() {
    setFlag(true);
    dispatch({
      type: "ADD_TO_ARRAY",
      item: {
        id: id,
        title: title,
        data: newData,
      },
    });
  }
  return (
         
      <div className="poll" onClick={addToArray}>
      <div className="poll__buttons">
        <button className="poll__featured__btn">FEATURED</button>
        <button className="poll__viral__btn">VIRAL</button>
        </div>
        <Link to="/result" style={{textDecoration:`none`}}> <h1>{title}</h1> </Link>
        <p>Check what is public opinion on this</p>
      </div>
   
  );
}
