import React from 'react';
import SignIn from './components/SignIn';
import MainScreen from './components/MainScreen';

function App() {
  // Ejemplo de estado para controlar si se ha iniciado sesión
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="App">
      {loggedIn ? <MainScreen /> : <SignIn />}
    </div>
  );
}

export default App;