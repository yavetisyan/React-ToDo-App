import React from "react";
import "./App.css";
import { List } from "./components/List";
import ToDoHeader from "./components/ToDoHeader";
import { toDoItems } from "./mock/toDoItems";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    toDoItems,
    toDoName: "",
  };

  change = (e) => {
    // this.state.toDoName = e.target.value;
    this.setState({
      toDoName: e.target.value,
    });
  };

  addToDo = () => {
    const newTodo = {
      id: uuidv4(),
      text: this.state.toDoName,
      done: false,
    };
    this.setState({
      toDoItems: [...this.state.toDoItems, newTodo],
    });
    this.setState({ toDoName: "" });
  };

  editToDo = (id) => {
    const index = this.state.toDoItems.findIndex(
      (todoItem) => todoItem.id === id
    );
    const editingToDoItem = this.state.toDoItems.find(
      (todoItem) => todoItem.id === id
    );
    const newItems = [...this.state.toDoItems];
    newItems.splice(index, 1, {
      ...editingToDoItem,
      done: !editingToDoItem.done,
    });
    this.setState({ toDoItems: newItems });
  };

  removeToDo = (id) => {
    const index = this.state.toDoItems.findIndex(
      (todoItem) => todoItem.id === id
    );
    const newItems = [...this.state.toDoItems];
    newItems.splice(index, 1);
    this.setState({ toDoItems: newItems });
  };

  render() {
    return (
      <div className="App">
        <ToDoHeader
          add={this.addToDo}
          toDoName={this.state.toDoName}
          change={this.change}
        />
        <List
          toDoItems={this.state.toDoItems}
          remove={this.removeToDo}
          edit={this.editToDo}
        />
      </div>
    );
  }
}

export default App;
