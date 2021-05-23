import React from "react";
import Project from "../components/Project";
import WorkInfo from "../work.json";

function Portfolio() {
  return (
    <div className="container text-center mt-3">
      <div className="border-bottom border-info mb-3">
        <h2 className="mb-3">About Me</h2>
      </div>
      <div className="row mb-2">
        <div className="col">
          <Project
            title={WorkInfo[0].title}
            img={WorkInfo[0].img}
            url={WorkInfo[0].url}
            alt={WorkInfo[0].alt}
          />
        </div>
        <div className="col">
          <Project
            title={WorkInfo[1].title}
            img={WorkInfo[1].img}
            url={WorkInfo[1].url}
            alt={WorkInfo[1].alt}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <Project
            title={WorkInfo[2].title}
            img={WorkInfo[2].img}
            url={WorkInfo[2].url}
            alt={WorkInfo[2].alt}
          />
        </div>
        <div className="col">
          <Project
            title={WorkInfo[3].title}
            img={WorkInfo[3].img}
            url={WorkInfo[3].url}
            alt={WorkInfo[3].alt}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <Project
            title={WorkInfo[4].title}
            img={WorkInfo[4].img}
            url={WorkInfo[4].url}
            alt={WorkInfo[4].alt}
          />
        </div>
        <div className="col">
          <Project
            title={WorkInfo[5].title}
            img={WorkInfo[5].img}
            url={WorkInfo[5].url}
            alt={WorkInfo[5].alt}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
