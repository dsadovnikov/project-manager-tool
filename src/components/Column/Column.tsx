import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { boardSlice } from "../../slices/board";
import { IColumn } from "../../types/column";
import Button from "../Button/Button";
import Card from "../Card/Card";

interface ColumnProps {
  column: IColumn;
}

const Column = (props: ColumnProps): JSX.Element => {
  const { board } = useAppSelector((state) => state.boardSlice);
  const { addCard, removeColumn } = boardSlice.actions;
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{props.column.title}</h3>
      {props.column.cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      <Button
        onClick={() =>
          dispatch(
            addCard({
              id: props.column.cards.length.toString(),
              title: "Test card",
              columnId: props.column.id,
            })
          )
        }
        title="Add card"
      />
      <Button
        onClick={() => dispatch(removeColumn(props.column))}
        title="Remove column"
      />
    </div>
  );
};

export default Column;
