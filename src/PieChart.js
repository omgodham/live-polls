import React from "react";
import "./PieChart.css";
import Chart from "react-google-charts";
import { useStateValue } from "./StateProvider";

export default function PieChart({ title }) {
    

  const [{ array}, dispatch] = useStateValue();
    const dropDown=array.data[title];
    const dropDownOptions=Object.keys(dropDown);
 

  // var data = [];

  //  data[0]=["Name Of Channel","Public Voting"];
  //     for(var i=0;i<Object.keys(channels).length;i++)
  // {
  //     data[i+1]=[channels[i],results[i]];
  //     console.log(data[i+1]);
  // }
 

  // const options = {
  //   title: "My Daily Activities",
  //   pieHole: 0.4,
  //   is3D: false
  // };
   function handleChange(event){
      const value=event.target.value;
      console.log(value);
   }

  return (
    <div>
      <h4>{title}</h4>
      
        <select  onChange={handleChange}>
            {dropDownOptions.map( item => {
                return <option>{item}</option>
            })}
        </select>
      {/* <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        /> */}
    </div>
  );
}
