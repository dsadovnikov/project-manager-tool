import axios from 'axios';

const payload = {
  token: 'tJE_iNBMWoclNTwMQdYl9w',
  data: {
    title: 'Board',
    columns: [
      {
        id: 0,
        title: 'First column',
        cards: [
          {
            id: 0,
            title: 'First card',
            columnId: 0,
          },
          {
            id: 1,
            title: 'Second card',
            columnId: 0,
          },
          {
            id: 2,
            title: 'Third card',
            columnId: 0,
          },
        ],
      },
      {
        id: 1,
        title: 'First column',
        cards: [
          {
            id: 3,
            title: 'Fourth card',
            columnId: 1,
          },
          {
            id: 4,
            title: 'Fifth card',
            columnId: 1,
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
