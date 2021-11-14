import React from "react";

class ToDoHeader extends React.Component {
  render() {
    return (
      <div>
        <h3>ToDo Lists</h3>
        <input
          type="text"
          value={this.props.toDoName}
          onChange={this.props.change}
        />
        <button onClick={() => this.props.add()}> Add</button>
      </div>
    );
  }
}

export default ToDoHeader;
