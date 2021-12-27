import './App.css';
import blimp from './images/blimp.png';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Hello, world!</h1>
      <img
        className='image'
        src={blimp}
        alt='An airship is flying through the sky. On its side there is the Practicum logo followed by the phrase, "Time to deploy." One side of its tail is labeled "Front End" and the other labeled "Back End".'
      ></img>
    </div>
  );
}

export default App;
