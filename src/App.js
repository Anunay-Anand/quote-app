// importing react and react router dom
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Importing custom components
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      {/* We Render all quotes and then specific quotes in different paths */}
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/new">
        <NewQuote />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
    </Switch>
  );
}

export default App;
