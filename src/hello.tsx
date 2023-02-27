import * as React from "react";

interface Props {
  userName: string;
}

const Hello: React.FC<Props> = (props) => {
  return <h2>Hello user: {props.userName} !</h2>;
};

export { Hello };