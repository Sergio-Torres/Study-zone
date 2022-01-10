import './App.css'
import Tasks from './components/Tasks/Tasks';
import Notes  from './components/Notes/Notes';
import PomodoroClock from './components/PomodoroClock/PomodoroClock';
import Navbar from './components/Navbar/Navbar';
function App() {

  return (

      <div className="body">
          <div>
              <Navbar/>
          </div>   
          <div className="tasks">
              <Tasks/>
              <Notes/>
          </div>
          <div className='pomodoro-clock'>
              <PomodoroClock/>
          </div>
               
      </div>
      
  );
}

export default App;
