import React from "react";

const BoardItem = props => {
  return (
    <div>
      <p>{props.idea.project}</p>
      <p>{props.idea.text}</p>
      <p>{props.idea.createdAt}</p>
      <p>{props.idea.priority}</p>
    </div>
  );
};

export default BoardItem;
