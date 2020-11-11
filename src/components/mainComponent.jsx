import React, { Component } from "react";
import BookList from "./lists/bookList.jsx";
import books from "../assets/books.js";
import NewBook from "./representational/NewBook.jsx";
import { Route,NavLink } from "react-router-dom";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books,
    };
  }

  deleteBookState = (index) => {
    //const temp = this.state.books.slice()   // Copy books array
    //const temp = this.state.books.map(item =>item)
    const temp = [...this.state.books]; // More Smarter way to copy books array in temp veriable
    //console.log(temp);
    temp.splice(index, 1); //The splice() method adds/removes items to/from an array, and returns the removed item(s).
    this.setState({ books: temp }); // Syntax : array.splice(index, howmany, item1, ....., itemX)
  };

  changeInputState = (event, index) => {
    //console.log("Input Target----",e.target);
    const book = { ...this.state.books[index] };
    book.bookName = event.target.value;
    const temp = [...this.state.books];
    temp[index] = book;
    this.setState({
      books: temp,
    });

    //console.log(book);
  };

  render() {
    //console.log(this.state);

    //console.log(bookState);

    const books = (
      <BookList
        books={this.state.books}
        delete={this.deleteBookState}
        change={this.changeInputState}
      />
    );

    //console.log(books);
    return (
      <div className="App">
        <div className="header">
          <h2>Books List : </h2>
        </div>

        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>

            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </nav>
        <Route exact path="/" render={() => books} />
        <Route exact path="/new-book" render={() => <NewBook/>} />  {/* also can use component = {NewBook} instead of using render = {()=><NewBook/>}*/}
      </div>
    );
  }
}

export default MainComponent;
