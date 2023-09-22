import React, { useState } from 'react';
import './App.css';
import Task from "./components/task";

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", description: "Clean your room" , deadline: "Today" } ,
      { id: 4, title: "Bins", description: "Put out bins for collection" , deadline: "Wednesday" } ,
      { id: 5, title: "Feed Cats", description: "Feed the four cats" , deadline: "Today" }
    ]
  });
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      deadline={task.deadline}
      description={task.description}
      key={task.id}
    />
  ))} 
    </div>
  );
}

export default App;
