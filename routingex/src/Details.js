import { useParams } from "react-router-dom";

function Details(props) {
  let { bookId } = useParams();
  const book = props.bookFacade.findBook(bookId);
  return (
    <div>
      <p>
        Title: {book.title}
        <br></br>Info: {book.info}
        <br></br>ID: {book.id}
      </p>
    </div>
  );
}
export default Details;
