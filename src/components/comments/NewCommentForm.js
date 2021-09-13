// Importing React and other libraries
import { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

// Importing custom components
import LoadingSpinner from "../UI/LoadingSpinner";

// Importing module css and other asset
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  // Using state to check the input and validity
  const [userComment, setUserComment] = useState("");

  // Sending comment Data using custom component
  const { sendRequest, status, error } = useHttp(addComment);

  // Re adding comments
  const { onAddedComment } = props;

  // optional: Could validate here
  const isCommentValid = userComment.trim() !== "";

  // Using useEffect to show animation
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // getting comment data
    const enteredText = userComment;

    // send comment to server
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });

    // Remove the comment data after submission
    setUserComment("");
  };

  // Handle comment state and data
  const userCommentHandler = (event) => {
    // Setting comment data
    setUserComment(event.target.value);
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
        <textarea
          id="comment"
          rows="5"
          onChange={userCommentHandler}
          value={userComment}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn" disabled={!isCommentValid}>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
