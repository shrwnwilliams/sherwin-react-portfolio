import React from "react";
import WorkCard from "../components/WorkCard";
import WorkInfo from "../work.json";

function Work() {
    

  return (
    <div className="container text-center">
      <div className="row mb-2">
        <div className="col">
          <WorkCard title={WorkInfo[0].title} img={WorkInfo[0].img} url={WorkInfo[0].url} alt={WorkInfo[0].alt} />
        </div> 
          <div className="col"> 
          <WorkCard title={WorkInfo[1].title} img={WorkInfo[1].img} url={WorkInfo[1].url} alt={WorkInfo[1].alt} />
        </div> 
      </div> 
      <div className="row mb-2"> 
        <div className="col"> 
          <WorkCard title={WorkInfo[2].title} img={WorkInfo[2].img} url={WorkInfo[2].url} alt={WorkInfo[2].alt} />
        </div> 
          <div className="col"> 
          <WorkCard title={WorkInfo[3].title} img={WorkInfo[3].img} url={WorkInfo[3].url} alt={WorkInfo[3].alt} />
        </div> 
      </div> 
      <div className="row mb-2"> 
        <div className="col"> 
          <WorkCard title={WorkInfo[4].title} img={WorkInfo[4].img} url={WorkInfo[4].url} alt={WorkInfo[4].alt} />
        </div> 
          <div className="col"> 
          <WorkCard title={WorkInfo[5].title} img={WorkInfo[5].img} url={WorkInfo[5].url} alt={WorkInfo[5].alt} />
        </div>
      </div>
    </div>
  );
}

export default Work;
