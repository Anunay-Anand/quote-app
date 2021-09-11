// Importing React and React Dom
import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

// Importing custom components
import Comments from "../components/comments/Comments";
import Highlighted from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning so Fast" },
  { id: "q2", author: "May", text: "Learning so Slow" },
  { id: "q3", author: "Mayer", text: "Learning so Quick" },
  { id: "q4", author: "Mayo", text: "Learning so Nicely" },
];

const QuoteDetail = () => {
  // Extract params from the useParams hook
  const params = useParams();
  const match = useRouteMatch();

  // Selecting the Quote
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // If quote not there id does not exist
  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <React.Fragment>
      <Highlighted text={quote.text} author={quote.author} />
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
