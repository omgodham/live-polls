import React from "react";
import "./PieChart.css";
import Chart from "react-google-charts";
import { useStateValue } from "./StateProvider";

export default function PieChart({ title }) {
  const [{ array }, dispatch] = useStateValue();
  const channels = array.data.options;

  var dropDownOptions = [];
  var currentArray = {};

  if (title != "global") {
    currentArray = array.data[title];
    dropDownOptions = Object.keys(currentArray);
  } else {
    currentArray = array.data[title];
    dropDownOptions = [];
  }

  var subArray = {};
  
  function handleChange(event) {
    const value = event.target.value;
    console.log(value);
    subArray = currentArray[value];
    console.log(subArray);
    data[0] = ["Name Of Channel", "Public Voting"];
    for (var i = 0; i < Object.keys(channels).length; i++) {
      data[i + 1] = [channels[i], subArray[i]];
    }
    console.log(data);
  }
  
  if(title!='global')
  subArray = currentArray[Object.keys(currentArray)[0]];
  else
  subArray =currentArray;
  var data = [];
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
    <div>
      <h4>{title}</h4>

      <select onChange={handleChange}>
        {dropDownOptions.map((item) => {
          return <option>{item}</option>;
        })}
      </select>

      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
