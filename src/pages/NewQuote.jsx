// Importing React and other Important libraries
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

// Importing custom components
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // Using custom hook to create Quote
  const { sendRequest, status } = useHttp(addQuote);
  // Fetching the history object
  const history = useHistory();

  // Using useEffect to check if the request is completed from custom hook
  // It is based on status code
  useEffect(() => {
    if (status === "completed") {
      // redirect the user on completion of creating quote
      history.push("/quotes");
    }
  }, [status, history]);

  // Accepting the new quote Data coming from QuoteForm
  const addQuoteHandler = (data) => {
    // Sending quote data to server using custom Hook
    sendRequest(data);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
