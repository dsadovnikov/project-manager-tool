import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardSlice, IBoard } from '../types/board';
import { ICard } from '../types/card';
import { IColumn } from '../types/column';
import { fetchBoardFromFakeServer } from '../api/fetchBoard';

const initialState: BoardSlice = {
  board: {
    title: '',
    columns: [],
  },
  isLoading: false,
  error: '',
};

export const fetchBoard = createAsyncThunk(
  'board/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchBoardFromFakeServer;
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Can't fetch board");
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addColumn(state, action: PayloadAction<IColumn>) {
      state.board.columns.push(action.payload);
    },
    removeColumn(state, action: PayloadAction<IColumn>) {
      state.board.columns = state.board.columns.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addCard(state, action: PayloadAction<ICard>) {
      const column = state.board.columns.find(
        (item) => item.id === action.payload.columnId
      );
      column?.cards.push(action.payload);
    },
    removeCard(state, action: PayloadAction<ICard>) {
      const column = state.board.columns.filter(
        (item) => item.id === action.payload.columnId
      );
      column.forEach(
        (item) =>
          (item.cards = item.cards.filter(
            (item) => item.id !== action.payload.id
          ))
      );
    },
  },
  extraReducers: {
    [fetchBoard.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBoard.fulfilled.type]: (state, action: PayloadAction<IBoard>) => {
      state.isLoading = false;
      state.error = '';
      state.board = action.payload;
    },
    [fetchBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default boardSlice.reducer;
