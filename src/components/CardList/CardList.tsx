import React from 'react';
import { ICard } from '../../types/card';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

interface CardListProps {
  cards: ICard[];
}

const CardList = (props: CardListProps) => {
  return (
    <div>
      <div className={styles.list}>
        {props.cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
