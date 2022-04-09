import './App.css';
import './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user,setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log('error',error);
    })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then( () =>{
      setUser({})
    })
    .catch(error =>{
      setUser({});
    })
  }
  return (
    <div className="App">
    {
      // checking if user is signed in or not ternery condition
      user.email?  <button onClick={handleSignOut}>Sign Out</button> :      
      <button onClick={handleGoogleSignIn}>Google Sign-in</button>
    }
     <h2>Name: {user.displayName}</h2>
     <h3>Your Email Address: {user.email}</h3>
     <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
