import React, { useEffect, useState } from "react";
import "./PieChart.css";
import Chart from "react-google-charts";
import { useStateValue } from "./StateProvider";

export default function PieChart({ title }) {
  const [{ array }, dispatch] = useStateValue();
  const [channels, setChannels] = useState([]);
  var dropDownOptions = [];
  var currentArray = {};

  if (title != "global") {
    currentArray = array.data[title];
    dropDownOptions = Object.keys(currentArray);
  } else {
    currentArray = array.data[title];
    dropDownOptions = [];
  }

  const [subArray, setSubArray] = useState({});
  const [value, setValue] = useState(`${dropDownOptions[0]}`);

  useEffect(() => {
    setChannels(array.data.options);
  }, []);

  useEffect(() => {
    if (title != "global") setSubArray(currentArray[value]);
    else setSubArray(currentArray);
    console.log(value);
  }, [value]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  var data = [];

  console.log(subArray);
  data[0] = ["Name Of Channel", "Public Voting"];
  for (var i = 0; i < Object.keys(channels).length; i++) {
    data[i + 1] = [channels[i], subArray[i]];
  }

  var options = {
    title: "",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className="pie__charts">
      <h4>{title}</h4>

      <select onChange={handleChange} className="dropdown">
        {dropDownOptions.map((item) => {
          return <option>{item}</option>;
        })}
      </select>

      <Chart
        className="chart"
        chartType="PieChart"
        data={data}
        options={options}
      />
    </div>
  );
}
