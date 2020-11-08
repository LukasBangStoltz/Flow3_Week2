import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import React, { useState } from "react";

function AddBook(props) {
  const initialBook = { id: "", title: "", info: "" };
  const [book, setBook] = useState(initialBook);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.bookFacade.addBook(book);
    setBook({ ...initialBook });
  };

  function handleChange(event) {
    const value = event.target.value;
    const id = event.target.id;
    setBook({
      ...book,
      [id]: value,
    });
  }

  return (
    <div>
      <h2>Add a book!</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" id="title" value = {book.title} onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Info:  
          <input type="text" id="info" value= {book.info} onChange={handleChange} />
        </label>
        <br></br>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddBook;
