import React,{Component}from 'react';

import Book from './components/Book.jsx'
import './App.css';




// Class Component 

class App extends Component{
  state = {
     books : [
       {bookName : "ABC", writer : "abc"},
       {bookName : "DEF", writer : "def"},
       {bookName : "GHI", writer : "ghi"}
     ] 
  }

  changeBookState = () =>{
    //console.log("clicked");
    this.setState({
      books : [
        {bookName : "newBookName", writer : "fjsdf"},
        {bookName : "DEF", writer : "def"},
        {bookName : "GHI Update", writer : "ghi"}
      ]
    })
  }
  changeInputState = (e) =>{
    //console.log("Input Target----",e.target);
    this.setState({
      books : [
        {bookName : "jhdfsf" , writer : "writerName"},
        {bookName : "jhdfsf", writer : "def"},
        {bookName : e.target.value, writer : "ghi"}
      ]
    })
  }

  render(){
    //console.log(this.state);
  return (
    <div className="App">
      <h2>Books List : </h2>
      <button onClick={this.changeBookState}>Change State</button>

      <hr/>
      <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer}></Book>
      <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer}></Book>
      <Book
      change= {this.changeInputState}
      bookName={this.state.books[2].bookName} writer={this.state.books[2].writer}></Book>
      
    </div>
  )
  }
}




export default App;
