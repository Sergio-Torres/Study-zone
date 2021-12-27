import './App.css';

import Tasks from './components/Tasks/Tasks';
import Notes  from './components/Notes/Notes';
import PomodoroClock from './components/PomodoroClock/PomodoroClock';
function App() {

  return (

    <div>
      <Tasks/>
      <Notes/>
      <PomodoroClock/>
    </div>
    
  );
}

export default App;
