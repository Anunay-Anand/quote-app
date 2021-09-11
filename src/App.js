// importing react and react router dom
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Importing custom components
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
// The wrapper element for the entire page. Thus we can render Navbar side by side
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
