import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const country = "in";
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country={country}
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country={country}
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country={country}
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country={country}
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country={country}
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key=""
              pageSize={pageSize}
              country={country}
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
