import React from "react";
import "../../stylesheets/Book.css"
import { withRouter } from 'react-router-dom' //for using Router Property can use withRouter method

const Book = (props) => {

    //console.log(props);
  return (
    <div className="Book" onClick={props.selectedBookHandler}>
    
        
      <h3 > Books : {props.bookName}</h3>
    </div>
  );
};

export default withRouter(Book); {/*If using render = {....} in <Router/> instead of  using component ={....}, for   getting props property  use "withRouter" method,  */}
