import React from "react";

type ButtonProp = { title: string };

export default function Button(props: ButtonProp): JSX.Element {
  const { title } = props;
  return <button>{title}</button>;
}
