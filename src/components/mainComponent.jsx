import React,{Component} from 'react';
import BookList from './lists/bookList.jsx'
import books from '../assets/books.js'


class MainComponent extends Component{
    state = {
        books : books,
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
         books = <BookList 
            books={this.state.books}
            delete = {this.deleteBookState}
            change = {this.changeInputState}
         
         />
   
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

export default MainComponent