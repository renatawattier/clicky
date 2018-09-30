import React from 'react';
import { HashRouter, Route, Link, Switch} from "react-router-dom";
import App from "./App";
import "./index.css";

export default () => (
    <HashRouter>
    <switch>
        <Route exact path="/"component={app} />
    </switch>
    </HashRouter>
)

ReactDOM.render(<App />, document.getElementById("root"));