import React from "react";
import ICard from "../../interfaces/ICard";
import "./card.css";

export default function Card(card: ICard): JSX.Element {
  const { title } = card;
  return <li className="card">{title}</li>;
}
