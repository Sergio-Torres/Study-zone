import './App.css'
import Tasks from './components/Tasks/Tasks';
import Notes  from './components/Notes/Notes';
import PomodoroClock from './components/PomodoroClock/PomodoroClock';
import Navbar from './components/Navbar/Navbar';
function App() {

  return (

        <div>
            <header>
                <Navbar/>
            </header>   
            <div className='container'>
                
                <div className="tasks">
                    <Tasks/>
                    <Notes className='notes'/>
                </div>
                
                <div className='pomodoro-clock'>
                    <PomodoroClock/>
                </div>
               
            </div>
        </div>
      
  );
}

export default App;
