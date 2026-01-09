import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Books from './components/Books'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const artistName = "Janeyli Rosario";
  const artistEmail = "janeylisrosario@gmail.com";

  return (
    <div className="app">
      <Navigation artistName={artistName} theme={theme} onToggleTheme={toggleTheme} />
      <Hero artistName={artistName} />
      <Gallery artistName={artistName} artistEmail={artistEmail} />
      <Books />
      <Contact artistName={artistName} artistEmail={artistEmail} />
      <Analytics />
    </div>
  )
}

export default App
