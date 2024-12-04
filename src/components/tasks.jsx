import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  setCurrentId,
  showoptions,
  ToTable,
  ClearTasks,
} from "../actions/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { addTolocalStorage } from "../reducers";
import Clear from "./BtnDeleteComponent/Clear";

const Tasks = ({ tas_input }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  addTolocalStorage("tasks", tasks);
  const handleClear = () => {
    dispatch(ClearTasks());
  };
  return (
    <div>
      <div className="list tasks  flex flex-col ">
        <h1>tasks</h1>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            const { id, taskName, option } = task;
            return (
              <div
                key={id}
                style={{ background: option ? "greenyellow" : "white" }}
                className=" task flex justify-between items-center   px-2 border m-1 py-1 rounded-sm bg-white transition-all border-[#f0f0f0] shadow-sm relative "
              >
                <h2 className="">{taskName}</h2>
                <div className="relative">
                  <button
                    id="btn"
                    onClick={(e) => {
                      dispatch(showoptions(id));
                    }}
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                  <div
                    style={{ display: option ? "flex" : "none" }}
                    className="options  flex-col absolute bg-white text-center w-[200px] shadow-md  rounded-s-md border  items-center p-1  gap-1 top-10 -left-44 hidden z-[999]   "
                  >
                    <button
                      onClick={() => dispatch(ToTable(id))}
                      className=" inline-block w-full hover:bg-[#ddd]  text-black"
                    >
                      start
                    </button>
                    <button
                      onClick={() => {
                        dispatch(setCurrentId(id));

                        tas_input.current.value = taskName;
                      }}
                      className=" inline-block w-full hover:bg-[#ddd]  text-black"
                    >
                      edit
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
        ) : (
          <div className="flex justify-center items-center h-full">
            <button
              className="animate-pulse w-full bg-[green] p-2 font-semibold transition-all text-white hover:text-black hover:bg-[greenyellow]"
              onClick={() => {
                tas_input.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
        )}
      </div>
      {tasks.length > 0 && <Clear handleClear={handleClear} />}{" "}
    </div>
  );
};
export default Tasks;
