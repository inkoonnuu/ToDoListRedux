import {
  ADD_TASK,
  DELETE_TASK,
  SETCURRENTID,
  TO_ANOTHER_TABLE,
  SHOW_OPTIONS,
  HIDDEN_OPTIONS,
  DONE,
  Start_task,
  DELETEITEM,
  CLEAR_TASKS,
  CLEAR_TASKS_INPROGRESS,
  CLEAR_TASKS_COMPLETE
} from "./actionVariable";

const addUpdateTask = (taskName) => {
  return {
    type: ADD_TASK,
    payload: {
      taskName,
    },
  };
};
const showoptions = (id) => {
  return {
    type: SHOW_OPTIONS,
    payload: {
      id,
    },
  };
};
const HiddenOptions = () => {
  return {
    type: HIDDEN_OPTIONS,
  };
};

const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};
const setCurrentId = (id) => {
  return {
    type: SETCURRENTID,
    payload: {
      id,
    },
  };
};
const ToTable = (id) => {
  return {
    type: TO_ANOTHER_TABLE,

    payload: {
      id,
    },
  };
};

const done = (id) => {
  return {
    type: DONE,
    payload: {
      id,
    },
  };
};

const starttask = () => {
  return {
    type: Start_task,
  };
};

const deleteFromDone=(id)=>{
  return{
    type:DELETEITEM,
    payload:{
      id
    }
  }
}
const ClearTasks=()=>{
  return{
    type:CLEAR_TASKS,
  }
}
const ClearTasksInProgress=()=>{
  return{
    type:CLEAR_TASKS_INPROGRESS,
  }
}
const ClearTasksComplete=()=>{
  return{
    type:CLEAR_TASKS_COMPLETE,
  }
}
export {
  ClearTasksComplete,
  starttask,
  done,
  ToTable,
  setCurrentId,
  deleteTask,
  addUpdateTask,
  showoptions,
  HiddenOptions,
  deleteFromDone,
  ClearTasks,
  ClearTasksInProgress
};
