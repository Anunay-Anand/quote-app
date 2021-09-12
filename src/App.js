// importing react and react router dom
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Importing custom components
import LoadingSpinner from "./components/UI/LoadingSpinner";
// The wrapper element for the entire page. Thus we can render Navbar side by side
import Layout from "./components/layout/Layout";

function App() {
  // Using lazy loading and importing NewQuote only when it is required
  const NewQuote = React.lazy(() => import("./pages/NewQuote"));
  const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

  return (
    <Layout>
      <Switch>
        <Suspense
          fallback={
            <article className="centered">
              <LoadingSpinner />
            </article>
          }
        >
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
          {/* When nothing is found. Universal path 404 */}
          <Route path="*">
            <NotFound />
          </Route>
        </Suspense>
      </Switch>
    </Layout>
  );
}

export default App;
