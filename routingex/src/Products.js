import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Details from "./Details";

function Products(props) {
  const bookArrayLength = props.bookFacade.getBooks().length;
  const allBooks = props.bookFacade.getBooks();
  const { path, url } = useRouteMatch();

  const bookList = allBooks.map((book) => {
    return (
      <li key={book.id}>
        <Link to={`${url}/${book.id}`}>{book.title} </Link>
      </li>
    );
  });

  return (
    <div>
      <h2>Products!</h2>
      <p>Antal bøger: {bookArrayLength}</p>
      <p>{bookList} </p>
      

      <Switch>
        <Route exact path={path}>
          <p>vælg en bog</p>

        </Route>
        <Route path={`${path}/:bookId`}>
      <Details    bookFacade={props.bookFacade}  />
        </Route>
      </Switch>
    </div>
  );
}

export default Products;
