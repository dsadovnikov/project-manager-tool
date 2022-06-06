import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { boardSlice } from '../../slices/board';
import { IBoard } from '../../types/board';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Button, { ButtonTheme, ButtonType } from '../Button/Button';
import Column from '../Column/Column';
import styles from './Board.module.scss';

interface BoardProps {
  board: IBoard;
}

const Board = (props: BoardProps): JSX.Element => {
  const { addColumn, reorderCards } = boardSlice.actions;
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult): void => {
    dispatch(reorderCards(result));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.board}>
        <h2 className={styles.header}>{props.board.title}</h2>
        <div className={styles.columns}>
          {props.board.columns.map((column, index) => (
            <Column key={index} column={column} />
          ))}
        </div>
        <Button
          type={ButtonType.button}
          theme={ButtonTheme.positive}
          onClick={() =>
            dispatch(
              addColumn({
                id: nanoid(),
                title: 'List',
                cards: [],
              })
            )
          }
        >
          Добавить список
        </Button>
      </div>
    </DragDropContext>
  );
};

export default Board;
