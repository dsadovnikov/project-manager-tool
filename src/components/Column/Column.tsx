import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardSlice } from '../../slices/board';
import { IColumn } from '../../types/column';
import AddCardForm from '../AppCardForm/AddCardForm';
import Button, { ButtonTheme, ButtonType } from '../Button/Button';
import CardList from '../CardList/CardList';
import styles from './Column.module.scss';

interface ColumnProps {
  column: IColumn;
}

const Column = (props: ColumnProps): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const switchShowForm = () => {
    setShowForm(!showForm);
  };

  const { removeColumn } = boardSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className={styles.column}>
      <div className={styles.headerContainer}>
        <h3 className={styles.title}>{props.column.title}</h3>
        <Button
          type={ButtonType.button}
          theme={ButtonTheme.negative}
          onClick={() => dispatch(removeColumn(props.column))}
        >
          X
        </Button>
      </div>
      <CardList cards={props.column.cards} />
      {showForm ? (
        <AddCardForm columnId={props.column.id} switchForm={switchShowForm} />
      ) : (
        <Button
          type={ButtonType.button}
          theme={ButtonTheme.positive}
          onClick={switchShowForm}
        >
          Add Card
        </Button>
      )}
    </div>
  );
};

export default Column;
