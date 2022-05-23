import React from "react";
import { IBoard } from "../../types/board";
import Column from "../Column/Column";

interface BoardProps {
  board: IBoard;
}

const Board = (props: BoardProps): JSX.Element => {
  return (
    <div>
      <h2>{props.board.title}</h2>
      {props.board.columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
};

export default Board;
