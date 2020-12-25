import React,{useState,useEffect} from 'react';
import "./Poll.css";
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import instance from './axios';
export default function Poll({id,title}) {

    const [{array},dispatch]=useStateValue();
    const [newData,setData]=useState({});
    const [flag,setFlag]=useState(false);

    useEffect(() => {
     async function getData(){
         const res = await instance.get(`/intern/result/${id}`);     
         setData(res.data.payload);
     }
     getData();
    
    },[flag]);

    function addToArray(){
        setFlag(true);
        dispatch({
            type:"ADD_TO_ARRAY",
            item:{
                id:id,
                title:title,  
                data:newData  
            }
        });


    }
   
    return (

        <Link to="/result"><div className="poll" onClick={addToArray}>
                <h1>{title}</h1>
                <p>This is the poll live This is the poll live This is the poll live</p>
        </div></Link>
    )
}