import React, { useState } from "react"
import Landing from "./components/Landing"
import Quiz from "./components/Quiz"
import Results from "./components/Results"
import MusicControl from "./components/MusicControl"
import { questions } from "./data/questions"

function App() {
  const [gameState, setGameState] = useState("landing") // 'landing', 'quiz', 'results'
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [unlockedGifts, setUnlockedGifts] = useState([])

  const startGame = () => {
    setGameState("quiz")
    setCurrentQuestion(0)
    setScore(0)
    setAnsweredQuestions([])
    setUnlockedGifts([])
  }

  const handleAnswer = (selectedOption, isCorrect) => {
    const currentQ = questions[currentQuestion]

    // Record the answered question
    const answeredQuestion = {
      ...currentQ,
      selectedOption,
      isCorrect,
    }

    setAnsweredQuestions((prev) => [...prev, answeredQuestion])

    if (isCorrect) {
      setScore((prev) => prev + 1)
      setUnlockedGifts((prev) => [...prev, currentQ.gift])
    }

    // Move to next question or end game immediately
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setGameState("results")
    }
  }

  const restartGame = () => {
    setGameState("landing")
    setCurrentQuestion(0)
    setScore(0)
    setAnsweredQuestions([])
    setUnlockedGifts([])
  }

  return (
    <div className="min-h-screen">
      <MusicControl />

      {gameState === "landing" && <Landing onStartGame={startGame} />}

      {gameState === "quiz" && (
        <Quiz
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          score={score}
          unlockedGifts={unlockedGifts}
        />
      )}

      {gameState === "results" && (
        <Results
          score={score}
          totalQuestions={questions.length}
          answeredQuestions={answeredQuestions}
          unlockedGifts={unlockedGifts}
          onRestart={restartGame}
        />
      )}
    </div>
  )
}

export default App
