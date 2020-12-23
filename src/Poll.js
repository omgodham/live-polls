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

        <div className="poll" >
                <div className="poll__buttons">
        <button className="poll__featured__btn">FEATURED</button>
        <button className="poll__viral__btn">VIRAL</button>
        </div>
               <Link to="/result"><h1 className="poll__heading" onClick={addToArray} >{title}</h1></Link>
                <p>This is the poll live This is the poll live This is the poll live</p>
        </div>
    )
}