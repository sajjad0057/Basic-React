import React, { Component } from "react";
import Book from "../representational/Book.jsx";
import { withRouter } from "react-router-dom";
import  {Link} from "react-router-dom";






class BookList extends Component {
  //console.log('-----',props);
  // constructor(props){
  //     super(props)
  // }

  render() {
    console.log("******>>", this.props);

    return this.props.books.map((book) => {
      //console.log(book.bookName);
      return (
          <Link to={"/" +book.id }key={book.id} style={{textDecoration:"none",color:"rgb(110, 108, 108)"}}>
          <Book
          bookName={book.bookName}
          writer={book.writer}
          
          selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
        />
          </Link>

      );
    });
  }
}

export default withRouter(BookList);
{
  /*If using render = {....} in <Router/> instead of  using component ={....}, for   getting props property  use "withRouter" method,  */
}
