import React, { useState, useEffect } from 'react';
import Main from './component/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
    
    return (
        <main>
            <Switch>
                <Route path="/main" component={Main} exact />
                <Route path="/map" component={Main} />
            </Switch>
        </main>
    )
}

export default App;