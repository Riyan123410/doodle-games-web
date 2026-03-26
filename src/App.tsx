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

  const base = import.meta.env.BASE_URL  // "/doodle-games-web/" in github pages, "/" in dev
  let Component;

  switch (window.location.pathname) {
    case base:
    case base + "index.html":
      Component = <Home />
      break
    case base + "about":
      Component = <About />
      break
    case base + "hangman":
      Component = <Hangman />
      break
    case base + "tic-tac-toe":
      Component = <TicTacToe />
      break
    case base + "connect4":
      Component = <Connect4 />
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