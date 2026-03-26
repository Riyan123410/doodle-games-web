// import { useState } from 'react';
// import ThemeToggle from './components/ThemeToggle.tsx';
import './App.css'; 
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.tsx'
import About from './components/about/About.tsx'
import Connect4 from './components/connect4/Connect4.tsx';
import Hangman from './components/hangman/Hangman.tsx';
import Home from './components/home/Home.tsx'
import TicTacToe from './components/ticTacToe/TicTacToe.tsx';

function App() {

  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const onHashChange = () => forceUpdate(n => n + 1)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  let Component;

  switch (window.location.hash) {
    case "":
    case "#":
      Component = <Home />
      break
    case "#about":
      Component = <About />
      break
    case "#hangman":
      Component = <Hangman />
      break
    case "#tic-tac-toe":
      Component = <TicTacToe />
      break
    case "#connect4":
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