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


    /*
    shouldComponentUpdate(nextProps, nextState) −
    This method returns a Boolean value true or false. Based on the return value React executes the render method which updates the actual DOM.
    We can add custom logic if requires in this method like comparing some variables to decide the process of updating.
    Side effects should be avoided.
    
    */

    shouldComponentUpdate(nextProps,nextState){
        console.log("Update bookList shouldComponentUpdate",nextProps,nextState);
        return true
    }

    componentDidUpdate(){
        console.log("update bookList componentDidUpdate !");
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("bookList getDerivedStateFromProps",nextProps,prevState);
        return prevState
    }
    
    getSnapshotBeforeUpdate(){
        console.log("Update bookList getSnapshotBeforeUpdate");

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