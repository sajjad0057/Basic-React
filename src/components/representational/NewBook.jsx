import React,{Component, createRef} from "react";

class NewBook extends Component{
  //console.log('------>',props);
  constructor(props){
      super(props);
      this.bookName = createRef();
      this.writer = createRef();
      this.description = createRef();
      this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit = e =>{
    console.log(`${this.bookName.current.value},
    ${this.writer.current.value},
    ${this.description.current.value}`);
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
            <input type="text" name="bookName" ref={this.bookName}/>
            <br />
            <br />
            <label> Writer : </label>
            <input type="text" name="writer" ref={this.writer}/>
            <br />
            <br />
            <label> Description : </label>
            <textarea name="book" name="description" ref={this.description}/>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );

  }

};

export default NewBook;
