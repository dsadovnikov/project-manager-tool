import { IColumn } from "./column";

export interface IBoard {
  title: string;
  columns: IColumn[];
}

export interface BoardSlice {
  board: IBoard;
  isLoading: boolean;
  error: string;
}
