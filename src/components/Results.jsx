import React, { useEffect, useState } from "react"
import Confetti from "./Confetti"

const Results = ({
  score,
  totalQuestions,
  answeredQuestions,
  unlockedGifts,
  onRestart,
}) => {
  const [showConfetti, setShowConfetti] = useState(false)
  const percentage = Math.round((score / totalQuestions) * 100)

  useEffect(() => {
    if (score > 0) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [score])

  const getScoreMessage = () => {
    if (score === totalQuestions) {
      return {
        emoji: "🎉",
        title: "¡Perfecto! ¡Eres una verdadera experta en literatura!",
        message:
          "¡Increíble conocimiento literario, Andrea! Puntuación perfecta.",
      }
    } else if (score >= totalQuestions * 0.7) {
      return {
        emoji: "🌟",
        title: "¡Excelente trabajo!",
        message:
          "Tu amor por la literatura realmente se nota. ¡Excelente trabajo!",
      }
    } else if (score > 0) {
      return {
        emoji: "📚",
        title: "¡Buen intento!",
        message: "¡Buen esfuerzo! Cada libro es una nueva aventura.",
      }
    } else {
      return {
        emoji: "💝",
        title: "¡El regalo más importante es tu cumpleaños!",
        message:
          "No importa el resultado, lo importante es participar. ¡Feliz cumpleaños!",
      }
    }
  }

  const scoreMessage = getScoreMessage()

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      {showConfetti && <Confetti />}

      <div className="max-w-4xl mx-auto text-center">
        {/* Main Results */}
        <div className="animate-fade-in">
          <div className="text-8xl mb-6">{scoreMessage.emoji}</div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-yellow-400 mb-4 drop-shadow-lg">
            ¡Quiz Completado!
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
            {scoreMessage.title}
          </h2>
        </div>

        {/* Score Display */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border border-yellow-400/60 p-6 max-w-2xl mx-auto mb-8 animate-slide-up">
          <div className="text-6xl font-bold text-yellow-400 mb-4">
            {score}/{totalQuestions}
          </div>
          <div className="text-xl text-white/90 mb-4">
            {percentage}% de respuestas correctas
          </div>
          <p className="text-lg font-serif text-white/80">
            {scoreMessage.message}
          </p>
        </div>

        {/* Question Review */}
        <div
          className="mb-8 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-6">
            📚 Resumen de Respuestas
          </h3>
          <div className="space-y-4">
            {answeredQuestions.map((q, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border-2 p-6 text-left ${
                  q.isCorrect ? "border-green-400/60" : "border-red-400/60"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`text-2xl ${
                      q.isCorrect ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {q.isCorrect ? "✅" : "❌"}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-semibold text-white mb-2">
                      Pregunta {index + 1}: {q.question}
                    </h4>
                    <div className="text-sm text-white/80 mb-2">
                      Tu respuesta: <strong>{q.selectedOption.text}</strong>
                    </div>
                    {!q.isCorrect && (
                      <div className="text-sm text-green-300">
                        Respuesta correcta:{" "}
                        <strong>
                          {q.options.find((opt) => opt.isCorrect)?.text}
                        </strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
