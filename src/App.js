import './App.css'
import Tasks from './components/Tasks/Tasks';
import Notes  from './components/Notes/Notes';
import PomodoroClock from './components/PomodoroClock/PomodoroClock';
import Navbar from './components/Navbar/Navbar';
function App() {

  return (

    <div className="body">
      <Navbar/>
      <Tasks/>
      <Notes/>
      <PomodoroClock/>
    </div>
    
  );
}

export default App;
