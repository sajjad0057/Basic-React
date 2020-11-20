import React,{Component} from "react";

class NewBook extends Component{
  //console.log('------>',props);
  state = {
      bookName : '',
      writer : '',
      description : ''
  }
  handleInputChange = event =>{
      const name = event.target.name
      const value = event.target.value
      //console.log(name,value);
      this.setState({
          [name] : value

          /* if we want to use variable as a state key in setState(),
            must put this variable under [variable_name].. 
            otherwise variable can be treat as a new kay in state..
         */
      })
  }
  handleSubmit = e =>{
    console.log(this.state);
    e.preventDefault();
  }

//   componentDidUpdate(){
//       console.log(this.state);
//   }

  render(){
    return (
        <div>
          <h2>New Data Entry </h2>
          <br />
          <form onSubmit={(e=>this.handleSubmit(e))}>
            <label> Book Name : </label>
            <input type="text" name="bookName" value={this.state.bookName}
            onChange={(event)=>this.handleInputChange(event)}/>
            <br />
            <br />
            <label> Writer : </label>
            <input type="text" name="writer" value={this.state.writer}
            onChange={(event)=>this.handleInputChange(event)} />
            <br />
            <br />
            <label> Description : </label>
            <textarea name="book" name="description" value={this.state.description}
            onChange={(event)=>this.handleInputChange(event)} />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );

  }

};

export default NewBook;
