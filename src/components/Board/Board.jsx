import React, { useEffect, useState } from 'react';
import './Board.css';
import Layout from '../Layout/Layout';
import BoardTask from './BoardTask/BoardTask';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../common/Input/Input';
import closeImg from '../../assets/images/close-pic.png';
import { addListStart, fetchBoardByIdStart } from '../../store/board/actions';
import Loader from '../common/Loader/Loader';

const Board = props => {
  const {board, lists, isLoading} = useSelector(state => state.board);
  const [isAddedList, setIsAddedList] = useState(false);
  const [listTitle, setListTitle] = useState();
  const dispatch = useDispatch();

  const id = props.match.params.id;

  const onMount = () => {
    dispatch(fetchBoardByIdStart(id));
  };

  useEffect(onMount, []);

  const checkEnterKeyPressed = event => {
    if (event.key === 'Enter') {
      if (listTitle) dispatch(addListStart({id, listTitle}));
      event.target.value = '';
      setListTitle('');
    }
  };

  return (
    <Layout>
      {!isLoading ?
        <div className="board">
          <p className="board__title">{board && board.title}</p>
          <ul className="board__tasks">
            {(board && lists) &&
            lists.map(list => {
              return (
                <li key={list.id}>
                  <BoardTask list={list} tasks={list.tasks} boardID={id}/>
                </li>
              );
            })}
            {!isAddedList ? (
              <li
                className="board__tasks_add"
                onClick={() => setIsAddedList(true)}
              >
                <p>Add a list...</p>
              </li>
            ) : (
              <div className="board__tasks_input">
                <img
                  src={closeImg}
                  alt="close-pic"
                  onClick={() => setIsAddedList(false)}
                />
                <Input
                  type="text"
                  placeholder="Enter list name"
                  onKeyPress={checkEnterKeyPressed}
                  onChange={event => setListTitle(event.target.value)}
                />
              </div>
            )}
          </ul>
        </div>
        : <Loader/>
      }
    </Layout>
  );
};

export default Board;
