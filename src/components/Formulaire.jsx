import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpdateTask } from "../actions/action";

const Formulaire = ({ tas_input }) => {
  const dispatch = useDispatch();
  const modeEdit = useSelector((state) => state.modeEdit);
  const handlSubmit = (e) => {
    e.preventDefault();
    if (tas_input.current.value != "") {
      dispatch(addUpdateTask(tas_input.current.value));
      tas_input.current.value = "";
    }
  };
  return (
    <>
      <h1 className="text-center text-[2rem] font-semibold tracking-wide uppercase ">
        To do list
      </h1>
      <form className="form" onSubmit={handlSubmit}>
        <input
          maxLength={28}
          ref={tas_input}
          name="task"
          type="text"
          placeholder="ENTER A TASK..."
          className="px-2  h-12 rounded-md outline-1 focus:outline-green-500  focus:shadow-md"
        />
        <button>{!modeEdit ? "Add The task" : "Edit"}</button>
      </form>
    </>
  );
};
export default Formulaire;
