import React,{Component} from "react";

class NewBook extends Component{
  //console.log('------>',props);
  constructor(props){
      super(props);
      this.state={
        bookName : '',
        writer : '',
        description : '',  
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
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
          <form onSubmit={this.handleSubmit}>
            <label> Book Name : </label>
            <input type="text" name="bookName" value={this.state.bookName}
            onChange={this.handleInputChange}/>
            <br />
            <br />
            <label> Writer : </label>
            <input type="text" name="writer" value={this.state.writer}
            onChange={this.handleInputChange} />
            <br />
            <br />
            <label> Description : </label>
            <textarea name="book" name="description" value={this.state.description}
            onChange={this.handleInputChange} />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );

  }

};

export default NewBook;
