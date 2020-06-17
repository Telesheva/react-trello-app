import React, { useEffect, useState } from 'react';
import './BoardList.css';
import BoardCreateForm from '../forms/BoardCreateForm/BoardCreateForm';
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteBoardStart, fetchBoardsStart } from '../../store/board/actions';
import Loader from '../common/Loader/Loader';
import closeImg from '../../assets/images/close-pic.png';

const BoardList = () => {
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const {boards, isLoading} = useSelector(state => state.board);
  const history = useHistory();
  const dispatch = useDispatch();

  const onMount = () => {
    dispatch(fetchBoardsStart());
  };

  const onDeleteBtnClick = id => {
    dispatch(deleteBoardStart(id));
  }

  useEffect(onMount, []);

  return (
    <Layout>
      {!isLoading ?
        <ul className="boardlist">
          {!isCreateFormOpen ? (
            <div
              className="boardlist__create"
              onClick={() => {
                setIsCreateFormOpen(true);
              }}
            >
              <h3 className="boardlist__create_text">Create a new board...</h3>
            </div>
          ) : (
            <div className="boardlist__create">
              <BoardCreateForm
                isShowed={isCreateFormOpen}
                setIsShowed={setIsCreateFormOpen}
              />
            </div>
          )}
          {boards && boards.map(board => {
            return (
              <li
                className="boardlist__item"
                key={board.id}
                onClick={() => history.push(`/board/${board.id}`)}
              >
                <div className="close">
                  <img
                    src={closeImg}
                    alt="close-pic"
                    onClick={() => onDeleteBtnClick(board.id)}
                  />
                </div>
                <p>{board.title}</p>
              </li>
            );
          })}
        </ul>
        : <Loader/>
      }
    </Layout>
  );
};

export default BoardList;
