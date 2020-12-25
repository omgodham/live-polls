import "./Result.css";

import { useStateValue } from "./StateProvider";
import { Link  } from "react-router-dom";
import PieChart from "./PieChart";

function Result(){

    const [{array},dispatch]=useStateValue();
 
    console.log(array);
        

return (<div className="result">
     <Link to="/"><h2>Back</h2></Link>
   <h1>{array.title }</h1>
    <div className="result__piecharts">

    <PieChart title={"global"}/>
    <PieChart title={"gender"}/>
    <PieChart title={"age"} />
    <PieChart title={"region"}/>
   
      </div> 
    </div>
   );
}
export default Result;