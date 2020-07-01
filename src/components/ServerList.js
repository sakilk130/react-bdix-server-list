import React from "react";
import Server from "./Server";

const serverList = ({ ftpList }) => {
  return (
    <div>
      {ftpList.map((user, i) => {
        return (
          <Server
            key={i}
            id={ftpList[i].id}
            image={ftpList[i].image}
            url={ftpList[i].url}
            name={ftpList[i].name}
          />
        );
      })}
    </div>
  );
};
export default serverList;
