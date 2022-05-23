import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { boardSlice } from "../../slices/board";
import { ICard } from "../../types/card";
import Button from "../Button/Button";

interface CardProps {
  card: ICard;
}

const Card = (props: CardProps): JSX.Element => {
  const { board } = useAppSelector((state) => state.boardSlice);
  const { removeCard } = boardSlice.actions;
  const dispatch = useDispatch();

  return (
    <div>
      {props.card.title}
      <Button
        onClick={() => dispatch(removeCard(props.card))}
        title="Remove card"
      />
    </div>
  );
};

export default Card;
