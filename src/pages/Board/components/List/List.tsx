import React from 'react';
import IList from '../../interfaces/IList';
import Card from '../Card/Card';
import Button from '../Button/Button';

import './list.css';

export default function List(props: IList): JSX.Element {
  const { title, cards } = props;

  const cardsArr: JSX.Element[] = cards.map((card) => (
    <Card key={card.id.toString()} id={card.id} title={card.title} />
  ));

  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      <ul className="cards-wrapper">{cardsArr}</ul>
      <div className="button-wrapper">
        <Button title="+ Добавить карточку" />
      </div>
    </div>
  );
}
