import React from "react";
import { ToDoItem } from "./ToDoItem";

export class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.toDoItems.map((todoItem) => (
            <ToDoItem
              item={todoItem}
              key={todoItem.id}
              remove={this.props.remove}
              edit={this.props.edit}
            />
          ))}
        </div>
      </div>
    );
  }
}
