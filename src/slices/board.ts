import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BoardSlice, IBoard } from "../types/board";

const initialState: BoardSlice = {
  board: {
    title: "",
    columns: [],
  },
  isLoading: false,
  error: "",
};

export const fetchBoard = createAsyncThunk(
  "board/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IBoard>(
        "https://my-json-server.typicode.com/dsadovnikov/project-manager-tool"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Can't fetch board");
    }
  }
);

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBoard.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBoard.fulfilled.type]: (state, action: PayloadAction<IBoard>) => {
      state.isLoading = false;
      state.error = "";
      state.board = action.payload;
    },
    [fetchBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default boardSlice.reducer;
