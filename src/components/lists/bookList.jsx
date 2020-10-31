import React from  'react';
import Books from '../representational/Book.jsx'

const BookList = (props)=>{
    //console.log('-----',props);
    return(
        props.books.map((book,index)=>{
            //console.log(book.bookName);
            return(
              <Books
              bookName={book.bookName}
              writer={book.writer}
              delete = {()=>props.delete(index)} 

              key = {book.id}
              inputName = {(event) => props.change(event,index)} 
              />
            )
        })
    )
}


export default BookList;