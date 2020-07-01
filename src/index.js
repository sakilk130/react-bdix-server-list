import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { ftpList } from "./ftpList";
import ServerList from "./ServerList";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
