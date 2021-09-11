// Importing React and React Dom
import React from "react";
import { useParams, Route } from "react-router";

// Importing custom components
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  // Extract params from the useParams hook
  const params = useParams();

  return (
    <React.Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      {/* Comment Route */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
