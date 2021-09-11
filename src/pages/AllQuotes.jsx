// Importing React and other libraries
import React from "react";

// Importing custom components
import QuoteList from "../components/quotes/QuoteList";

// Dummy data for quotes
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning so Fast" },
  { id: "q2", author: "May", text: "Learning so Slow" },
  { id: "q3", author: "Mayer", text: "Learning so Quick" },
  { id: "q4", author: "Mayo", text: "Learning so Nicely" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
