import React,{useState,useEffect} from 'react';
import "./Polls.css";
import Poll from "./Poll";
import instance from "./axios";
export default function Polls() {

    const [polls,setPolls]=useState([]);
    const fetchUrl="/intern";
    useEffect( () => {
         async function getData(){
               const request= await instance.get(fetchUrl);
            //    console.log(request.data.payload);
               setPolls(request.data.payload); 
               return request;
         }
         getData();
    },[fetchUrl]);

    return (
        <div className="polls">
        {polls.map(item => {
                return <Poll id={item._id} title={item.question}/>;
        })}
                
        </div>
    )
}
