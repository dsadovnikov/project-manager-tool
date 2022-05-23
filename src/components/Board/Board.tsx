import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { boardSlice } from "../../slices/board";
import { IBoard } from "../../types/board";
import Button from "../Button/Button";
import Column from "../Column/Column";

interface BoardProps {
  board: IBoard;
}

const Board = (props: BoardProps): JSX.Element => {
  const { board } = useAppSelector((state) => state.boardSlice);
  const { addColumn } = boardSlice.actions;
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{props.board.title}</h2>
      {props.board.columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
      <Button
        onClick={() =>
          dispatch(
            addColumn({
              id: board.columns.length.toString(),
              title: "List",
              cards: [],
            })
          )
        }
        title="Add list"
      />
    </div>
  );
};

export default Board;
