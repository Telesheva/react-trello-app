import axios from '../axios/axios-board';
import { v4 as uuidv4 } from 'uuid';

export const addBoardQuery = async (title) => {
  const newBoard = {
    id: uuidv4(),
    title,
    lists: []
  };
  await axios.post('/boards.json', newBoard);
  return newBoard;
}

export const deleteBoardQuery = async id => {

}

export const fetchBoardsQuery = async () => {
  const {data} = await axios.get('/boards.json');
  return Object.values(data);
}

export const fetchBoardByIdQuery = async id => {
  const {data} = await axios.get('/boards.json');
  let board;
  Object.values(data).forEach(item => {
    if(item.id === id) {
      board = item;
    }
  });
  return board;
}

