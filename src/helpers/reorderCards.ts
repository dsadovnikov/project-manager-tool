import { DraggableLocation } from 'react-beautiful-dnd';
import { BoardSlice } from '../types/board';

export const reorderCards = (
  state: BoardSlice,
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const { index: sourceCardIndex, droppableId: sourceId } = source;
  const { index: destinationCardIndex, droppableId: destinationId } =
    destination;
  const sourceColumnIndex = state.board.columns.findIndex(
    (item) => item.id === sourceId
  );
  const destinationColumnIndex = state.board.columns.findIndex(
    (item) => item.id === destinationId
  );

  return state.board.columns.map((item, currentColumnIndex) => {
    if (destinationColumnIndex === currentColumnIndex) {
      const [sourceCard] = state.board.columns[sourceColumnIndex].cards.splice(
        sourceCardIndex,
        1
      );
      [sourceCard].forEach((item) => (item.columnId = destinationId));
      const destinationCards = Array.from(
        state.board.columns[destinationColumnIndex].cards
      );
      destinationCards.splice(destinationCardIndex, 0, sourceCard);
      item.cards = destinationCards;
    }
    return item;
  });
};
