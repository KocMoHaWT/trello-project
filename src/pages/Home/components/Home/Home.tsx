import React, { Component } from "react";

import IHomeProps from "../../interfaces/IHomeProps";
import IHomeState from "../../interfaces/IHomeState";
import AddButton from "../AddButton/AddButton";

import Board from "../Board/Board";

import "./home.css";

export default class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      boards: [
        { id: 1, title: "покупки" },
        { id: 2, title: "подготовка к свадьбе" },
        { id: 3, title: "разработка интернет-магазина" },
        { id: 4, title: "курс по продвижению в соцсетях" },
      ],
    };
  }

  render(): JSX.Element {
    const { boards } = this.state;
    const boardsItems = boards.map((board) => (
      <Board key={board.id.toString()} id={board.id} title={board.title} />
    ));

    return (
      <div className="home-page">
        <h1 className="title">Мои доски</h1>
        <div className="boards-wrapper">
          {boardsItems}
          <AddButton />
        </div>
      </div>
    );
  }
}
