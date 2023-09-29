import React, { useState } from 'react';
import './App.css';
import Task from "./components/task";
import AddTaskForm from './components/Form';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", done: false}
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  }
  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }
  console.log(formState);
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task,index) => (              
    <Task 
      title={task.title}
      deadline={task.deadline}
      description={task.description}
      key={task.id}
      done={task.done}
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
    />
  ))}
  <AddTaskForm change={formChangeHandler} />
    </div>
  );
}

export default App;
