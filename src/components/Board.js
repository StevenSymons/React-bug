import React from "react";
import BoardItem from "./BoardItem";

const Board = props => {
  return (
    <div>
      <div>
        <button onClick={props.addIdea}>New idea</button>
        <span>Sort ideas by:</span>
        <select onChange={props.changeFilter}>
          <option value="date">Date created</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      {props.ideas.map(idea => {
        return <BoardItem idea={idea} />;
      })}
    </div>
  );
};

export default Board;
