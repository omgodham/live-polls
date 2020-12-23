import "./Result.css";

import { useStateValue } from "./StateProvider";

import ShowChart from "./ShowChart.js";

function Result(){

  const [{array},dispatch]=useStateValue();
 
return (<div className="result">
    <h1 className="result__title">What your views on {array[0].title }</h1>
    <div className="result__charts">
      <ShowChart category="global"/>
      <ShowChart category="gender"/>
      <ShowChart category="age"/>
      <ShowChart category="region"/>    
    </div>
    </div>
   );
}
export default Result;