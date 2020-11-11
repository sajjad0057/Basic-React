import React from "react";
import "../../stylesheets/Book.css"
const Book = (props) => {

    //console.log(props);
  return (
    <div className="Book">
    
        
      <h3 onClick={props.delete} > Books : {props.bookName}</h3>
      <h5>writer : {props.writer} </h5>
      <input type="text" onChange={props.inputName} value={props.bookName}/>
      <hr/>
    </div>
  );
};

export default Book;
