import Done from "./components/done";
import Progress from "./components/progress";
import Tasks from "./components/tasks";
import Formulaire from "./components/Formulaire";
import { useRef } from "react";

function App() {
  const tas_input = useRef();
  return (
    <div className="flex flex-col gap-5">
      <Formulaire tas_input={tas_input} />
      <div className="lists">
        <Tasks tas_input={tas_input} />
        <Progress />
        <Done />
      </div>
    </div>
  );
}
export default App;
