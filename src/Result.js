import "./Result.css";
import {useEffect,useState} from "react";
import { useStateValue } from "./StateProvider";
import instance from "./axios";
import Chart from "react-google-charts";
function Result(){

const [results,setResults]=useState({});
const [channels,setChannels]=useState();
    const [{array},dispatch]=useStateValue();
    const apiId=array[0].id;
    useEffect(()=>{
        async function getData(){
            const request=await instance.get(`/intern/result/${apiId}`);
            console.log(request);
            console.log(request.data.payload.global);
            console.log(request.data.payload.options);
            setChannels(request.data.payload.options);
            setResults(request.data.payload.global);
        return request;
        }
        getData();
    },[]);

        console.log(array);

    //    {channels.map((channel,index) => {
    //          console.log(channel)
    //   console.log(`${property}: ${object[property]}`);  })}
 var data=[];
// var j=0;
//   console.log(channels[j]);
//  console.log(property);
 data[0]=["Name Of Channel","Public Voting"];
    for(var i=0;i<Object.keys(channels).length;i++)
{
    data[i+1]=[channels[i],results[i]];
    console.log(data[i+1]);
}
console.log(data);
    // const data=[[]];
    // data[0]=["Name Of Channel","Public Voting"];

    // for (var property in channels) {
    //    property=property+1;
    //     data[property]=[`${channels[property]}`,results[property]];
    //   }
    //   console.log(data);


        // const data = [
        //     ["Name Of Channel", "Public Voting"],
        //     ["Work", 11],
        //     ["Eat", 2],
        //     ["Commute", 2],
        //     ["Watch TV", 2],
        //     ["Sleep", 7] // CSS-style declaration
        //   ];
          const options = {
            title: "My Daily Activities",
            pieHole: 0.4,
            is3D: false
          };


return (<div className="result">
   <h1>Hi There</h1>
    <p>{array[0].id + " " + array[0].title }</p>
    <div >
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
   );
}
export default Result;