import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchBoard } from "../slices/board";
import Board from "./Board/Board";

function App() {
  const dispatch = useAppDispatch();
  const { board, isLoading, error } = useAppSelector(
    (state) => state.boardSlice
  );

  useEffect(() => {
    console.log("Обращение к серверу");
    dispatch(fetchBoard());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <Board board={board} />
    </div>
  );
}

export default App;
