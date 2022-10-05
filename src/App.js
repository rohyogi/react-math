import './scss/app.scss';
import ExerciseQuestion from './components/ExerciseQuestion';
import Solution from './components/Solution';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Welcome to the React Challenge</h1>
      <Solution />
    </div>
  );
}

export default App;
