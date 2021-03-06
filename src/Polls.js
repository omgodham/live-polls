import React,{useState,useEffect} from 'react';
import "./Polls.css";
import Poll from "./Poll";
import instance from "./axios";
export default function Polls() {

    const [polls,setPolls]=useState([]);
    
    useEffect( () => {
         async function getData(){
               const request= await instance.get('/intern');
              setPolls(request.data.payload);
               // return request;
         }
         getData();
    },[]);


    return (
        <div className="polls">
        {polls.map(item => {
                return <Poll id={item._id} title={item.question}/>;
        })}
                
        </div>
    )
}
