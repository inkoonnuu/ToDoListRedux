import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  deleteTask,
  HiddenOptions,
  showoptions,
  starttask,
  ClearTasksInProgress} from "../actions/action";
import { done } from "../actions/action";
import { addTolocalStorage } from "../reducers";
import Clear from "./BtnDeleteComponent/Clear";
const Progress = () => {
  const dispatch = useDispatch();
  const inProgress = useSelector((state) => state.inProgress);
  const tasks = useSelector((state) => state.tasks);
  addTolocalStorage("inProgress", inProgress);
const handleClear=()=>{
  dispatch(ClearTasksInProgress())
}
  return (
    <div>
    <div className="list in-Progress flex flex-col">
      <h1>in Progress</h1>
      {inProgress.length > 0
        ? inProgress.map((task) => {
            const { id, taskName, option } = task;
            return (
              <div
                key={id}
                className=" task flex justify-between items-center  px-2 border m-1 py-1 rounded-sm border-[#f0f0f0] shadow-sm relative"
              >
                <h2>{taskName}</h2>
                <div className="relative">
                  <button
                    onClick={() => {
                      dispatch(showoptions(id));
                    }}
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                  <div
                    style={{ display: option ? "flex" : "none" }}
                    className="options -left-44 flex-col absolute bg-white text-center w-[200px] shadow-md  rounded-e-md border  items-center p-1  gap-1 top-10 hidden z-30 "
                  >
                    <button
                      onClick={() => {
                        dispatch(done(id));
                      }}
                      className=" inline-block w-full hover:bg-[#ddd]  text-black"
                    >
                      done{" "}
                    </button>

                    <button
                      onClick={() => dispatch(deleteTask(id))}
                      className=" inline-block w-full hover:bg-[#ddd]  text-black"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : tasks.length > 0 && (
            <div className="flex h-full justify-center items-center">
              <button
                className="animate bg-[green] w-full p-2  font-semibold transition-all text-white hover:text-black hover:bg-[greenyellow]"
                onClick={() => {
                  dispatch(starttask());
                }}
              >
                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>{" "}
              </button>
            </div>
          )}
    </div>
{ inProgress.length>0 &&   <Clear handleClear={handleClear}/>
}    </div>
  );
};
export default Progress;
