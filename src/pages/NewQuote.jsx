// Importing React and other Important libraries
import React from "react";

// Importing custom components
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // Accepting the new quote Data coming from QuoteForm
  const addQuoteHandler = (data) => {
    console.log(data);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
