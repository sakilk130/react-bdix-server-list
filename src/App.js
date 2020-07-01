import React from "react";
import ServerList from "./ServerList";
import { ftpList } from "./ftpList";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>BDIX Server List</h1>
      <SearchBox />
      <ServerList ftpList={ftpList} />
    </div>
  );
};
export default App;
