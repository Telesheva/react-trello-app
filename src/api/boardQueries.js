import axios from '../axios/axios-board';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../firebase/firebase';

const database = firebase.database();

const getBoards = async () =>{
  const {data} = await axios.get('/boards.json');
  return data;
}

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
  let firebaseID;
  Object.entries(await getBoards()).forEach(item => {
    if (item[1].id === id) firebaseID = item[0]
  })
  const boardRef = database.ref(`/boards/${firebaseID}`);
  await boardRef.remove();

  const data = await getBoards();
  if (data) return Object.values(data)
  else return [];
}

export const fetchBoardsQuery = async () => {
  const data = await getBoards();
  if (data) return Object.values(data)
  else return [];
}

export const fetchBoardByIdQuery = async id => {
  const data = await getBoards();
  let board;
  Object.values(data).forEach(item => {
    if(item.id === id) {
      board = item;
    }
  });
  return board;
}

export const addListQuery = async (boardID, title) => {
  const newList = {
    id: uuidv4(),
    title,
    tasks: []
  };

  let firebaseID;
  Object.entries(await getBoards()).forEach(item => {
    if (item[1].id === boardID) firebaseID = item[0]
  })

  console.log(firebaseID);

  await axios.post(`/boards/${firebaseID}/lists/${newList.id}`, newList);

  /*const listsRef = database.ref(`/boards.json/${firebaseID}`);
  console.log(listsRef);
  await listsRef.child(newList.id).set(JSON.stringify(newList));*/
  console.log(axios.get(`/boards.json/${firebaseID}`));
  //return axios.get(`/boards.json/${firebaseID}`);
}

