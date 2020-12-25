import React, { useEffect, useState } from "react";
import "./PieChart.css";
import Chart from "react-google-charts";
import { useStateValue } from "./StateProvider";

export default function PieChart({ title }) {
  const [{ array }, dispatch] = useStateValue();
  // const channels = array.data.options;
const [channels,setChannels]= useState([]);
  var dropDownOptions = [];
  var currentArray = {};

  if (title != "global") {
    currentArray = array.data[title];
    dropDownOptions = Object.keys(currentArray);
  } else {
    currentArray = array.data[title];
    dropDownOptions = [];
  }

  // var subArray = {};
  const [subArray,setSubArray] = useState({});
  const [value,setValue]=useState(`${dropDownOptions[0]}`);

  useEffect(() => {
    setChannels(array.data.options);
    // console.log(channels);
  },[]);

  useEffect(() => {
    // subArray = currentArray[value];
    if(title != 'global')
    setSubArray(currentArray[value]);
    else
    setSubArray(currentArray);
    console.log(value);
  },[value]);
  // console.log("after");



  function handleChange(event) {
    // value = event.target.value;
    setValue(event.target.value);
    // console.log(value);
    // subArray = currentArray[value];
    // console.log(subArray);
    // data[0] = ["Name Of Channel", "Public Voting"];
    // for (var i = 0; i < Object.keys(channels).length; i++) {
    //   data[i + 1] = [channels[i], subArray[i]];
    // }
    // console.log(data);
  }

  // if(title!='global')
  // subArray = currentArray[Object.keys(currentArray)[0]];
  // // else
  // subArray =currentArray;
   var data = [];

  // subArray = currentArray[value];
  console.log(subArray);
  data[0] = ["Name Of Channel", "Public Voting"];
  for (var i = 0; i < Object.keys(channels).length; i++) {
    data[i + 1] = [channels[i], subArray[i]];
  }

  // data[0] = ["Name Of Channel", "Public Voting"];
  // for (var i = 0; i < Object.keys(channels).length; i++) {
  //   data[i + 1] = [channels[i], subArray[i]];
  // }


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
