import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MoodSelector } from './components/MoodSelector'
import { SongGrid } from './components/SongGrid'
import { songs } from './data'
import { useState } from 'react'

const moods = ["HAPPY", "SAD", "ENERGETIC", "CHILL"]

function App() {
  const [currentMood, setCurrentMood] = useState<string | null>(null)

  const visibleSongs = currentMood ? songs.filter((song) => song.category.toLowerCase() === currentMood.toLowerCase()) : [];

  return (
    <>
      <Header />
      <MoodSelector currentMood={currentMood} moods={moods} onSelectMood={setCurrentMood} />
      <SongGrid songs={visibleSongs} />
      <Footer />
    </>

  )
}

export default App
