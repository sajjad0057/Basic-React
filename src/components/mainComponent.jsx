import React, { Component } from "react";
import BookList from "./lists/bookList.jsx";
import books from "../assets/books.js";
import NewBook from "./representational/NewBook.jsx";
import BookDetail from "./representational/BookDetail.jsx";
import { Route, NavLink, Switch, Redirect} from "react-router-dom";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books,
      selectedBook: null,
    };
  }
  selectedBookHandler = (bookId) => {
    //console.log("++++++++", bookId);
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({
      selectedBook: book,
    });
  };

  render() {
    //console.log(this.state);

    //console.log(bookState);

    const books = (
      <BookList
        books={this.state.books}
        selectedBookHandler={this.selectedBookHandler}
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
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/books" render={() => books} />
          <Route exact path="/new-book" component={NewBook} />
          {/* also can use component = {NewBook} instead of using render = {()=><NewBook/>}*/}
          <Route
            exact
            path="/:name"
            render={() => <BookDetail book={this.state.selectedBook} />}
          />
          <Redirect from="/" to="/books"/>
        </Switch>
      </div>
    );
  }
}

export default MainComponent;
