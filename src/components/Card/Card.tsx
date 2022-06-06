import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { boardSlice } from '../../slices/board';
import { ICard } from '../../types/card';
import Button, { ButtonTheme, ButtonType } from '../Button/Button';
import styles from './Card.module.scss';

interface CardProps {
  card: ICard;
  index: number;
}

const Card = (props: CardProps): JSX.Element => {
  const { removeCard } = boardSlice.actions;
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided): JSX.Element => (
        <div
          className={styles.card}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.card.title}
          <Button
            type={ButtonType.button}
            theme={ButtonTheme.neutral}
            onClick={() => dispatch(removeCard(props.card))}
          >
            X
          </Button>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
