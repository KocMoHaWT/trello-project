import React, { Component } from 'react';

import List from '../List/List';
import Button from '../Button/Button';
import LinkButton from '../LinkButton/LinkButton';

import IBoardProps from '../../interfaces/board-interfaces/IBoardProps';
import IBoardState from '../../interfaces/board-interfaces/IBoardState';

import './board.css';

export default class Board extends Component<IBoardProps, IBoardState> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      title: 'Моя тестовая доска',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  }

  render(): JSX.Element {
    const { id } = this.props;

    const { title, lists } = this.state;
    const listsElements: JSX.Element[] = lists.map((item) => (
      <List key={item.id.toString()} id={item.id} title={item.title} cards={item.cards} />
    ));
    return (
      <div className="board">
        <div className="container">
          <LinkButton title="<- Домой" />
          <h1 className="board-title">{`${title} id:${id}`}</h1>

          <div className="wrapper">
            <div className="lists-wrapper">{listsElements}</div>
            <div className="button-wrapper">
              <Button title="+ Добавить список" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
