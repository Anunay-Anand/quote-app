// Importing React and other Important libraries
import React from "react";
import { useHistory } from "react-router";

// Importing custom components
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // Fetching the history object
  const history = useHistory();

  // Accepting the new quote Data coming from QuoteForm
  const addQuoteHandler = (data) => {
    console.log(data);

    // Sending user back to the quotes page
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
