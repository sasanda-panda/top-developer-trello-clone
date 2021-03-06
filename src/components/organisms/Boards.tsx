import React, { FC } from 'react';
import { BoardType } from '../../store/types';
import '../../styles/organisms/Boards.scss';
import Board from '../molecules/Board';
import BoardCreate from './BoardCreate';

type Props = { user: string, boards: BoardType[] | null, boardsHandlers: any };

const Boards: FC<Props> = ({ user, boards, boardsHandlers }) => {
  let boardItems = null;
  if (boards !== null) {
    boardItems = boards.map((board, index) => {
      return (
        <Board
          key={board.created_at}
          index={index}
          text={board.text}
          pathname={`/${user}/${board.created_at}`}
        />
      )
    })
  }
  return (
    <ul className="Boards">
      {boardItems}
      <BoardCreate boardsHandlers={boardsHandlers} />
    </ul>
  );
};

export default Boards;