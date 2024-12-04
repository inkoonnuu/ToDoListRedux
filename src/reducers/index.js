import {
  ADD_TASK,
  CLEAR_TASKS,
  CLEAR_TASKS_COMPLETE,
  CLEAR_TASKS_INPROGRESS,
  DELETE_TASK,
  DELETEITEM,
  DONE,
  HIDDEN_OPTIONS,
  SETCURRENTID,
  SHOW_OPTIONS,
  Start_task,
  TO_ANOTHER_TABLE,
} from "../actions/actionVariable";

const data = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  inProgress: JSON.parse(localStorage.getItem("inProgress")) || [],
  done: JSON.parse(localStorage.getItem("done")) || [],
  modeEdit: false,
  currentId: null,
};
export function addTolocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
const index = (state = data, action) => {
  switch (action.type) {
    case ADD_TASK:
      const taskName = action.payload.taskName;
      if (taskName !== "" && state.modeEdit == false) {
        return {
          ...state,
          tasks: [
            ...state.tasks,
            { id: new Date().getTime(), taskName: taskName, option: false },
          ].map((item) => {
            return { ...item, option: false };
          }),
        };
      } else {
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id == state.currentId) {
              task.taskName = taskName;
            }
            return task;
          }),
          modeEdit: false,
          currentId: null,
        };
      }
    case SHOW_OPTIONS:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id == action.payload.id
            ? { ...item, option: !item.option }
            : { ...item, option: false }
        ),
        inProgress: state.inProgress.map((item) =>
          item.id == action.payload.id
            ? { ...item, option: !item.option }
            : { ...item, option: false }
        ),
      };

    case HIDDEN_OPTIONS:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          return { ...item, option: false };
        }),
        inProgress: state.inProgress.map((item) => {
          return { ...item, option: false };
        }),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id != action.payload.id),
        inProgress: state.inProgress.filter(
          (item) => item.id != action.payload.id
        ),
      };
    case SETCURRENTID:
      return {
        ...state,
        modeEdit: true,
        currentId: action.payload.id,
        tasks: state.tasks.map((item) => {
          if (item.option) {
            item.option = false;
          }
          return item;
        }),
      };
    case TO_ANOTHER_TABLE:
      const taskselected = state.tasks.find(
        (item) => item.id == action.payload.id
      );
      taskselected.option = false;
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== taskselected.id),
        inProgress: [...state.inProgress, taskselected],
      };
    case DONE:
      const task = state.inProgress.find(
        (item) => item.id == action.payload.id
      );
      return {
        ...state,
        done: [...state.done, task],
        inProgress: state.inProgress.filter((item) => item.id != task.id),
      };

    case Start_task:
      return {
        ...state,
        tasks: state.tasks.map((item, indexx) => {
          if (indexx == 0) {
            return { ...item, option: true };
          }
          return item;
        }),
      };
    case DELETEITEM:
      return {
        ...state,
        done: state.done.filter((item) => item.id !== action.payload.id),
      };
      case CLEAR_TASKS:
        return{
          ...state,tasks:[]
        }
          case CLEAR_TASKS_INPROGRESS:
        return{
          ...state,inProgress:[]
        }  
          case CLEAR_TASKS_COMPLETE:
        return{
          ...state,done:[]
        }
    default:
      return state;
  }
};
export default index;
