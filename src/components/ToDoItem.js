import React from "react";

export function ToDoItem({ item, remove, edit }) {
  return (
    <div
      style={{
        border: "1px solid #000",
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px auto",
      }}
    >
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => {
          edit(item.id);
        }}
      />
      <div
        style={{
          textDecoration: item.done ? "line-through" : "",
        }}
      >
        {item.text}
      </div>
      <button onClick={() => remove(item.id)}>X</button>
    </div>
  );
}
