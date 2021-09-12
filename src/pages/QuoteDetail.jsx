// Importing React and React Dom
import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// Importing custom components
import Comments from "../components/comments/Comments";
import Highlighted from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  // Extract params from the useParams hook
  const params = useParams();
  const match = useRouteMatch();

  // Using custom component to fetch the quote
  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = params;

  // using useEffect to sendRequest
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <article className="centered focus">
        <LoadingSpinner />
      </article>
    );
  }

  // If quote not there id does not exist
  if (error) {
    return <p className="centered">{error}</p>;
  }

  // If we don't have a quote
  if (status === "completed" && !loadedQuote.text) {
    return <p className="centered">No Quote Found !!</p>;
  }

  return (
    <React.Fragment>
      <Highlighted text={loadedQuote.text} author={loadedQuote.author} />
      {/* Creating an extra Route just for the load comments button */}
      <Route path={match.path} exact>
        <article className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </article>
      </Route>
      {/* Comment Route */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
