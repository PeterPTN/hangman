import { useState, useEffect, useCallback } from 'react'
import words from "./wordList.json";
import HangmanDrawing from './components/hm-drawing/HangmanDrawing';
import HangmanWord from './components/hm-word/HangmanWord';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  // WordToGuess set to return a word from wordList.json
  // Lazy initilisation
  // Only runs when initial state is needed
  // Better than re-rendering an expensive computation then setting to initial state
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  }

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  // 2. useCallback - when guessedLetters updates re-run function with new state
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser])

  // 1. Handler will always use first iteration of callback on mount
  // guessedLetters will always be = []
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      // Doesn't match from a-z early return
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler)
    }
    // Adding guessedLetters as dependency works
    // If no useCallback used
    // We only want re-renders when state changes
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler)
    }
  })

  return (
    <div className='app'>
      <div>
        <h1>
          {isWinner && "You're A Winner! - Play Again? (Press Enter)"}
          {isLoser && "Unfortunate... - Play Again? (Press Enter)"}
        </h1>
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  )
}

export default App
