// Importing React and other libraries (hooks)
import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";

// Importing custom components
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
  // Using our custom hook to create a Request
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  // Using useEffect to automatically get all Quotes on loading
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // If the status if pending return other component
  if (status === "pending") {
    return (
      <article className="centered">
        <LoadingSpinner />
      </article>
    );
  }

  // If there is an error
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  // If there is no data to show
  if ((status === "completed" && !loadedQuotes) || loadedQuotes.length === 0) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
