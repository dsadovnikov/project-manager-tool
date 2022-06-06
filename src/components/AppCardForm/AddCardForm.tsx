import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardSlice } from '../../slices/board';
import Button, { ButtonTheme, ButtonType } from '../Button/Button';
import styles from './AddCardForm.module.scss';

interface AddCardFormProps {
  columnId: string;
  switchForm: () => void;
}

const AddCardForm = ({ columnId, switchForm }: AddCardFormProps) => {
  const [cardText, setCardText] = useState<string>('');

  const { addCard } = boardSlice.actions;
  const dispatch = useDispatch();

  const addCardAndClearForm = () => {
    dispatch(
      addCard({
        id: nanoid(),
        title: cardText,
        columnId: columnId,
      })
    );
    setCardText('');
  };

  return (
    <form className={styles.form}>
      <textarea
        className={styles.textarea}
        value={cardText}
        onChange={(e) => setCardText(e.target.value)}
        placeholder="Введите название для этой карточки"
        rows={3}
      />
      <div className={styles.buttons}>
        {cardText ? (
          <Button
            type={ButtonType.button}
            theme={ButtonTheme.positive}
            onClick={addCardAndClearForm}
          >
            Add Card
          </Button>
        ) : null}

        <Button
          type={ButtonType.button}
          theme={ButtonTheme.negative}
          onClick={switchForm}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default AddCardForm;
