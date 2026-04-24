import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker  from "./Components/ProgressTracker";

function App() {
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <TaskList />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
}

export default App;