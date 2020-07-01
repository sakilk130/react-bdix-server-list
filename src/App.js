import React, { Component } from "react";
import ServerList from "./ServerList";
import { ftpList } from "./ftpList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ftpList: ftpList,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterServer = this.state.ftpList.filter((ftpList) => {
      return ftpList.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">BDIX Server List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ServerList ftpList={filterServer} />
      </div>
    );
  }
}
export default App;
