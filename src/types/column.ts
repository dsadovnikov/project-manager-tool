import { ICard } from "./card";

export interface IColumn {
  id: string;
  title: string;
  cards: ICard[];
}
