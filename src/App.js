import logo from './logo.svg';
import './App.css';
import { Component } from "react"
import Child from './Component/Child';
//import ToDoList from './Component/ToDoList';
// OR

class App extends Component{
  state={
    colors : ["Red", "Blue", "Green", "White"],
    images : ["https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg", "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg", "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="],
    counter:0,
    colorCounter:0,
    imageCounter:0,
    show: false,
  }
  increase=()=>{
    this.setState({counter:++ this.state.counter})
  }
  discrease=()=>{
    this.setState({counter:-- this.state.counter})
  }
  changeShow=()=>{
    this.setState({show:! this.state.show})
   }
  changeColor=()=>{
    if(this.state.colorCounter < this.state.colors.length-1)
      this.setState({colorCounter: ++ this.state.colorCounter})

    else
      this.setState({colorCounter:0})
    
  }

  changeImage=()=>{
    if(this.state.imageCounter < this.state.images.length-1)
      this.setState({imageCounter: ++ this.state.imageCounter})

    else
      this.setState({imageCounter:0})
    
  }

  /* For ToDoList App */
  addTask=()=>{
    let ul = document.getElementById("list");
        let Task = document.getElementById("holdTask").value;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(Task));
        ul.appendChild(li);
    
    }



  render(){
    return (

      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increase}> Increase!</button>
        <button onClick={this.discrease}> Discrease!</button>

        {this.state.show ? <h1>Yes</h1> : <h1>No</h1> }
        <button onClick={this.changeShow}> Change Show State!</button>

        <h1>Color: {this.state.colors[this.state.colorCounter]}</h1>
        <button onClick={this.changeColor}> Change Color !</button>

        <h1>Image: <img src={this.state.images[this.state.imageCounter]} className="img" /></h1>
        <button onClick={this.changeImage}> Change Image!</button>

        {/* Component lifeCyicle */}
        <hr></hr><br></br>
        {this.state.show? <Child /> :null}
        <button onClick={this.changeShow}>My name!</button>

        {/* ToDoList-app HW  */}
        <hr></hr><br></br>
        <h1>HW2 ToDo</h1>
        <input type="text" id="holdTask" placeholder="write the task"  />
        <input type="button" id="add" value="Add Task!" onClick={this.addTask} />
        <ul id="list" />

        </div>
    )
  }
}


export default App;
