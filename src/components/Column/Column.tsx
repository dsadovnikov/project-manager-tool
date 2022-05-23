import React from "react";
import { IColumn } from "../../types/column";
import Card from "../Card/Card";

interface ColumnProps {
  column: IColumn;
}

const Column = (props: ColumnProps): JSX.Element => {
  return (
    <div>
      <h3>{props.column.title}</h3>
      {props.column.cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Column;
