import React from 'react';
import { useDispatch } from 'react-redux';
import { boardSlice } from '../../slices/board';
import { ICard } from '../../types/card';
import Button, { ButtonTheme, ButtonType } from '../Button/Button';
import styles from './Card.module.scss';

interface CardProps {
  card: ICard;
}

const Card = (props: CardProps): JSX.Element => {
  const { removeCard } = boardSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      {props.card.title}
      <Button
        type={ButtonType.button}
        theme={ButtonTheme.neutral}
        onClick={() => dispatch(removeCard(props.card))}
      >
        X
      </Button>
    </div>
  );
};

export default Card;
