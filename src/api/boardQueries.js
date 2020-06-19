import axios from '../axios/axios-board';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../firebase/firebase';

const database = firebase.database();

const getBoards = async () => {
  const {data} = await axios.get('/boards.json');
  return data;
}

const getFirebaseID = async id => {
  let firebaseID;
  Object.entries(await getBoards()).forEach(item => {
    if (item[1].id === id) firebaseID = item[0];
  });
  return firebaseID;
}

const getListFirebaseID = async (boardID, listID) => {
  const lists = [];
  let firListID;
  Object.entries(await fetchBoardByIdQuery(boardID)).forEach(item => {
    if (item[0].includes('list')) {
      lists.push(item[1]);
    }
    if (item[0].includes(`list_${listID}`)) {
      firListID = item[0];
    }
  });
  return {lists, firListID};
}

export const addBoardQuery = async (title) => {
  const newBoard = {
    id: uuidv4(),
    title,
    lists: []
  };
  await axios.post('/boards.json', newBoard);
  return newBoard;
};

export const deleteBoardQuery = async id => {
  const firebaseID = await getFirebaseID(id);

  const boardRef = database.ref(`/boards/${firebaseID}`);
  await boardRef.remove();

  const data = await getBoards();
  if (data) return Object.values(data);
  else return [];
};

export const fetchBoardsQuery = async () => {
  const data = await getBoards();
  if (data) return Object.values(data);
  else return [];
};

export const fetchBoardByIdQuery = async id => {
  const data = await getBoards();
  let board;
  Object.values(data).forEach(item => {
    if (item.id === id) {
      board = item;
    }
  });
  return board;
};

export const addListQuery = async ({id, listTitle}) => {
  const newList = {
    id: uuidv4(),
    title: listTitle
  };

  const firebaseID = await getFirebaseID(id);

  const listsRef = database.ref(`/boards/${firebaseID}`);
  await listsRef.child(`list_${newList.id}`).set(newList);
  return await fetchBoardByIdQuery(id);
};

export const deleteListQuery = async ({boardID, listID}) => {
  const {lists, firListID} =  await getListFirebaseID(boardID, listID);
  const firebaseID = await getFirebaseID(boardID);

  const newLists = lists.filter(list => list.id !== listID);

  const listRef = database.ref(`/boards/${firebaseID}/${firListID}`);
  await listRef.remove();

  return newLists;
};

export const addTaskQuery = async ({boardID, listID, title}) => {
  const newTask = {
    id: uuidv4(),
    title,
    status: 'in progress'
  };
  const tasks = [];

  let firebaseID, firListID;
  Object.entries(await getBoards()).forEach(item => {
    if (item[1].id === boardID) firebaseID = item[0];
  });

  Object.entries(await fetchBoardByIdQuery(boardID)).forEach(item => {
    if (item[0].includes(`list_${listID}`)) {
      firListID = item[0];
    }
  });

  const listsRef = database.ref(`/boards/${firebaseID}/${firListID}`);
  await listsRef.child(`task_${newTask.id}`).set(newTask);

  const boardFromQuery = Object.entries(await fetchBoardByIdQuery(boardID));
  boardFromQuery.forEach(item => {
    if (item[0].includes(`list_${listID}`)) {
      Object.values(item).forEach(task => {
        Object.values(task).forEach(el => typeof el !== 'string' && tasks.push(el));
      });
    }
  });
  return {tasks, listID};
};
