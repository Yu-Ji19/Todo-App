import React from "react";
import FinishButton from "../styledComponent/finishButton";

import "semantic-ui-css/semantic.min.css";

const ItemForm = props => {
  const { todos, handleClick } = props;
  let todolist = todos.map(todo => {
    return (
      <div className="container" key={todo.id}>
        <div className="ui divider" />
        <div className="container">
          <div>{todo.content}</div>
          <FinishButton
            classname="finishButton"
            onClick={() => {
              handleClick(todo.id);
            }}
          >
            Finished
          </FinishButton>
        </div>
        <div className="ui divider" />
      </div>
    );
  });
  return <div className="container">{todolist}</div>;
};

export default ItemForm;
