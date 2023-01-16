import { useState } from 'react'
import words from "./wordList.json";
import HangmanDrawing from './components/hm-drawing/HangmanDrawing';
import HangmanWord from './components/hm-word/HangmanWord';
import Keyboard from './components/keyboard/Keyboard';
import globalStyles from './sass/styles.scss';

function App() {
  // WordToGuess set to return a word from wordList.json
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className='app'>
      <div>
        <h1>Lose Win</h1>
      </div>

      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />

    </div>
  )
}

export default App
