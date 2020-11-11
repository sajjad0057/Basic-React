import React, {Component} from  'react';
import Book from '../representational/Book.jsx'

class BookList extends Component{
    //console.log('-----',props);
    // constructor(props){
    //     super(props)
    // }


    render(){

        return(
            this.props.books.map((book,index)=>{
                //console.log(book.bookName);
                return(
                  <Book
                  bookName={book.bookName}
                  writer={book.writer}
                  delete = {()=>this.props.delete(index)} 
    
                  key = {book.id}
                  inputName = {(event) => this.props.change(event,index)} 
                  />
                )
            })
        )

    }

}


export default BookList;