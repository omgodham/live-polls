import React from 'react';
import "./Poll.css";
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
export default function Poll({id,title}) {

    const [{array},dispatch]=useStateValue();
   
    function addToArray(){
        dispatch({
            type:"ADD_TO_ARRAY",
            item:{
                id:id,
                title:title    
            }
        });
    }
   
    return (

        <Link to="/result"><div className="poll" onClick={addToArray}>
                <h1>{title + " " + id}</h1>
                <p>This is the poll live This is the poll live This is the poll live</p>
        </div></Link>
    )
}