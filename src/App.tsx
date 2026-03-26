// import { useState } from 'react';
// import ThemeToggle from './components/ThemeToggle.tsx';
import './App.css'; 
import Navbar from './components/Navbar.tsx'
import About from './components/about/About.tsx'
import Connect4 from './components/connect4/Connect4.tsx';
import Hangman from './components/hangman/Hangman.tsx';
import Home from './components/home/Home.tsx'
import TicTacToe from './components/ticTacToe/TicTacToe.tsx';

function App() {

  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = <Home></Home>
      break
    case "/about":
      Component = <About></About>
      break
    case "/hangman":
      Component = <Hangman></Hangman>
      break
    case "/tic-tac-toe":
      Component = <TicTacToe></TicTacToe>
      break
    case "/connect4":
      Component = <Connect4></Connect4>
      break
  }

  // const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      {Component}
    </div>
  );
}

export default App;