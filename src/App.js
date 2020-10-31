import React,{Component}from 'react';

import Book from './components/Book.jsx'
import './App.css';




// Class Component 

class App extends Component{
  state = {
     books : [
       {id:1 , bookName : "ABC", writer : "abc"},
       {id:2 , bookName : "DEF", writer : "def"},
       {id:3 , bookName : "GHI", writer : "ghi"}
       
     ],
     showBooks : true,
  }

  deleteBookState = (index) =>{
    //const temp = this.state.books.slice()   // Copy books array
    //const temp = this.state.books.map(item =>item)
    const temp = [...this.state.books] // More Smarter way to copy books array in temp veriable
    console.log(temp);
    temp.splice(index,1)                      //The splice() method adds/removes items to/from an array, and returns the removed item(s).
    this.setState({books:temp})                        // Syntax : array.splice(index, howmany, item1, ....., itemX)


  }


  changeInputState = (event,index) =>{
    //console.log("Input Target----",e.target);
    const book = {...this.state.books[index]}
    book.bookName = event.target.value;
    const temp = [...this.state.books]
    temp[index]= book
    this.setState({
        books:temp   
    })

    //console.log(book);
  }

  toggleBooks = () =>{
    this.setState({
      showBooks : !this.state.showBooks
    })
  }




  render(){
    //console.log(this.state);


    //console.log(bookState);
    let books = null
    if(this.state.showBooks){
      books = this.state.books.map((book,index)=>{
        //console.log(book.bookName);
        return(
          <Book
          bookName={book.bookName}
          writer={book.writer}
          delete = {this.deleteBookState.bind(this,index)} // we can also use bind method for passing parameter instead of using Arrow function .
          change = {this.changeInputState}
          key = {book.id}
          inputName = {(event) => this.changeInputState(event,index)} // we can also use bind method for passing parameter.
          />
        )
    })

    }

    //console.log(books);
  return (
    <div className="App">
      <h2>Books List : </h2>
      <hr/>
      <button onClick={this.toggleBooks}>Toggle Books</button>

      <hr/>
      { books }
      
    </div>
  )
  }
}




export default App;
