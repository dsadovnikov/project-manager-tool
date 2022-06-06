import axios from 'axios';
import { nanoid } from 'nanoid';

const payload = {
  token: 'tJE_iNBMWoclNTwMQdYl9w',
  data: {
    title: 'Board',
    columns: [
      {
        id: nanoid(),
        title: 'First column',
        cards: [
          {
            id: '0',
            index: 0,
            title: 'First card',
            columnId: '0',
          },
          {
            id: '1',
            index: 1,
            title: 'Second card',
            columnId: '0',
          },
          {
            id: '2',
            index: 2,
            title: 'Third card',
            columnId: '0',
          },
        ],
      },
      {
        id: nanoid(),
        title: 'First column',
        cards: [
          {
            id: '3',
            index: 0,
            title: 'Fourth card',
            columnId: '1',
          },
          {
            id: '4',
            index: 1,
            title: 'Fifth card',
            columnId: '1',
          },
        ],
      },
    ],
  },
};

export const fetchBoardFromFakeServer = axios({
  method: 'post',
  url: 'https://app.fakejson.com/q',
  data: payload,
});
