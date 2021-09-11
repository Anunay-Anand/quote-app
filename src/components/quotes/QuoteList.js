// Importing important libraries
import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

// Sorting ALgorithm
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  // Fetching the history object
  const history = useHistory();
  const location = useLocation();

  // Using default JavaScript object to fetch query params
  const queryParams = new URLSearchParams(location.search);

  // We will create a helper Parameter
  const isSortingAscending = queryParams.get("sort") === "asc";

  // Calling the sorting helper
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  // Changing the type of Sorting taking place
  const changeSortingHandler = () => {
    history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <article className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </article>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
