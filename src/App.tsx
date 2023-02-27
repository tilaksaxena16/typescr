import React , {useState} from "react";
import { Hello } from "./hello";
import { NameEdit } from "./nameEdit";

const App :React.FC = () => {
  const [name, setName] = useState("");

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <Hello userName={name} />
      <NameEdit userName={name} onChange={setUsernameState} />
    </>
  );
};

export { App };
