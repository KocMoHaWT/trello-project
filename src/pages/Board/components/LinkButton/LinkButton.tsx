import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./link-button.css";

type LinkButtonProp = { title: string };

export default function LinkButton(props: LinkButtonProp): JSX.Element {
  const { title } = props;
  return (
    <div className="link">
      <Link to="/">
        <Button title={title} />
      </Link>
    </div>
  );
}
