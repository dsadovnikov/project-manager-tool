import React from "react";
import { ICard } from "../../types/card";

interface CardProps {
  card: ICard;
}

const Card = (props: CardProps): JSX.Element => {
  return <div>{props.card.title}</div>;
};

export default Card;
