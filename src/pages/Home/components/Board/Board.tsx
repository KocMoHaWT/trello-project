import React from "react";
import { Link } from "react-router-dom";
import IBoard from "../../interfaces/IBoard";
import colorGenerator from "./colorGenerator";
import "./board.css";

export default function Board(props: IBoard): JSX.Element {
  const { id, title } = props;

  return (
    <>
      <Link to={`/board/${id}`}>
        <div
          className="board-element"
          style={{ backgroundColor: colorGenerator() }}
        >
          <h3 className="title">{title}</h3>
        </div>
      </Link>
    </>
  );
}
