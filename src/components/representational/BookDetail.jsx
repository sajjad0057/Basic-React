import React from "react";
const BookDetail = (props) => {
  console.log("BookDetail Props --->", props);
  if (props.book == null) return <div></div>;
  return (
    <div>
      <h1>Book Name : {props.book.bookName}</h1>
      <h3>Writer : {props.book.writer}</h3>
      <hr />
      <h3>{props.book.description}</h3>
    </div>
  );
};

export default BookDetail;
