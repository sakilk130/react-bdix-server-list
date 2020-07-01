import React from "react";

const Server = ({ id, image, url, name }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <a href={`${url}`} target="_blank" rel="noopener noreferrer">
        <img width="300" height="200" alt="" src={`${image}`}></img>
      </a>
      <h2>
        {id}.{name}
      </h2>
    </div>
  );
};
export default Server;
