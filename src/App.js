import './App.css';
import './firebase.init';
import { getAuth } from 'firebase/auth';
import app from './firebase.init';

const auth = getAuth(app);
function App() {
  return (
    <div className="App">
     <button>Google Sign-in</button>
    </div>
  );
}

export default App;
