import React from 'react';
import "./ShowChart.css";
import { useStateValue } from "./StateProvider";
import instance from "./axios";
import Chart from "react-google-charts";
import {useEffect,useState} from "react";
import { Switch } from 'react-router-dom';

export default function ShowChart(props){

    const [global,setGlobal]=useState({});
    const [option,setOptions]=useState({});
    const [age,setAge]=useState({});
    const [gender,setGender]=useState({});
    const [region,setRegion]=useState({});


    const [{array},dispatch]=useStateValue();
    const [drop,setDrop]=useState([]);
  const apiId=array[0].id;
   const fetchUrl=`/intern/result/${apiId}`;

    useEffect(()=>{
        async function getData(){
            
            const request=await instance.get(fetchUrl);
             setOptions(request.data.payload.options);
                switch(props.category)
                {
                    case 'global':{
                        setGlobal(request.data.payload.global);
                        var keyNames = Object.keys(global);
                        setDrop(keyNames);
                        console.log("global");
                        console.log(drop);
                        break;
                    }
                    case 'age':{
                        setAge(request.data.payload.age);
                        var keyNames = Object.keys(age);
                        setDrop(keyNames);
                        console.log("age");
                        console.log(drop);
                        break;
                    }
                    case 'region':{
                        setRegion(request.data.payload.region);
                        var keyNames = Object.keys(region);
                        setDrop(keyNames);
                        console.log("region");
                        console.log(drop);
                        break;
                    }
                    case 'gender':{
                        setGender(request.data.payload.gender);
                        var keyNames = Object.keys(gender);
                        setDrop(keyNames);
                        console.log("gender");
                        console.log(drop);
                        break;
                    }

                } 
                console.log(request);
        return request;
        }
        getData();
    },[]);

 var data=[];

 data[0]=["Name Of Channel","Public Voting"];


        // switch(props.category){
        //     case 'global':{
        //         for(var i=0;i<Object.keys(option).length;i++)
        //         {
        //             data[i+1]=[option[i],global[i]];
        //         }
                
        //     }
        //     break;
        //     case 'age':{
        //         // var keyNames = Object.keys(age);

        //         // for(var i=0;i<Object.keys(option).length;i++)
        //         // {
        //         //     data[i+1]=[option[i],keyNames[i]];
        //         // }
               
        //     }
        //     break;
        //      default: console.log("not found");
        // }


          const options = {
            title: "My Daily Activities",
            pieHole: 0.4,
            is3D: false
          };

    return (
        <div className="showchart">

        <h3>{props.category}</h3>

        <select id="selectNumber">
        {drop.map( (e)=> {
           return <option>{e}</option>;
        })}
        </select>
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
