import { useDispatch, useSelector } from "react-redux";
import { addTolocalStorage } from "../reducers";
import { ClearTasksComplete, deleteFromDone } from "../actions/action";
import Clear from "./BtnDeleteComponent/Clear";

const Done = () => {
  const done = useSelector((state) => state.done);
  const dispatch = useDispatch();
  addTolocalStorage("done", done);
  const handlClearFromDone = () => {
    dispatch(ClearTasksComplete());
  };
  return (
    <div>
      <div className="list done ">
        <h1>done</h1>

        {done.length > 0 &&
          done.map((task) => {
            const { id, taskName, option } = task;
            return (
              <div
                key={id}
                className="task-done  bg-green-400 task flex justify-between items-center  px-2 border m-1 py-1 rounded-sm border-[#f0f0f0] shadow-sm relative"
              >
                <h2>{taskName}</h2>
                <span>✅</span>
                <button
                  onClick={() => dispatch(deleteFromDone(id))}
                  className="delete-From-Done bg-[red] text-white font-semibold transition-all hover:bg-[#b40404] h-full absolute z-10 left-0  overflow-hidden w-0"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
      {done.length > 0 && <Clear handleClear={handlClearFromDone} />}
    </div>
  );
};
export default Done;
