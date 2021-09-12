// Importing React and other libraries
import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

// Importing custom components
import LoadingSpinner from "../UI/LoadingSpinner";

// Importing module css and other asset
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  // Sending comment Data using custom component
  const { sendRequest, status, error } = useHttp(addComment);

  // Re adding comments
  const { onAddedComment } = props;

  // Using useEffect to show animation
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // getting comment daTA
    const enteredText = commentTextRef.current.value;
    // optional: Could validate here

    // send comment to server
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <article className="centered focus">
          <LoadingSpinner />
        </article>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
