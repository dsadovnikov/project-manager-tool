import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ICard } from '../../types/card';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

interface CardListProps {
  columnId: string;
  cards: ICard[];
}

const CardList = (props: CardListProps): JSX.Element => {
  return (
    <Droppable droppableId={props.columnId}>
      {(provided): JSX.Element => (
        <div
          className={styles.list}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {props.cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CardList;
