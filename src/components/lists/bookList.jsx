import React, {Component} from  'react';
import Books from '../representational/Book.jsx'

class BookList extends Component{
    //console.log('-----',props);
    constructor(props){
        super(props)
        console.log("BookList Constructor !");
    }


    componentDidMount(){
        console.log("BookList Component componentDidMount !");
      }

    componentWillMount(){
    console.log("BookList Component componentWillMount !");
    }
     
    render(){
        console.log("BookList Component rendered");
        return(
            this.props.books.map((book,index)=>{
                //console.log(book.bookName);
                return(
                  <Books
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