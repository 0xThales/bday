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
          "Has desbloqueado todos tus regalos de cumpleaños. ¡Increíble conocimiento literario, Andrea!",
      }
    } else if (score >= totalQuestions * 0.7) {
      return {
        emoji: "🌟",
        title: "¡Excelente trabajo!",
        message:
          "Tu amor por la literatura realmente se nota. ¡Has ganado algunos regalos maravillosos!",
      }
    } else if (score > 0) {
      return {
        emoji: "📚",
        title: "¡Buen intento!",
        message:
          "Has desbloqueado algunos regalos. ¡Cada libro es una nueva aventura!",
      }
    } else {
      return {
        emoji: "💝",
        title: "¡El regalo más importante es tu cumpleaños!",
        message:
          "No importa el resultado, tienes regalos especiales esperándote. ¡Feliz cumpleaños!",
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

        {/* Unlocked Gifts */}
        {unlockedGifts.length > 0 && (
          <div
            className="mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-3xl font-serif font-bold text-yellow-400 mb-6">
              🎁 Tus Regalos Desbloqueados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {unlockedGifts.map((gift, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-yellow-400/50 p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">📖</div>
                  <h4 className="text-xl font-serif font-bold text-yellow-400 mb-2">
                    {gift.title}
                  </h4>
                  <p className="text-lg text-white/90 mb-2">
                    por {gift.author}
                  </p>
                  <p className="text-sm text-white/70">{gift.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Question Review */}
        <div
          className="mb-8 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
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

        {/* Birthday Message */}
        <div
          className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-yellow-400 p-6 max-w-2xl mx-auto mb-8 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-4xl mb-4">🎂</div>
          <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">
            ¡Feliz Cumpleaños, Andrea!
          </h3>
          <p className="text-lg font-serif text-white/90 leading-relaxed">
            Este quiz fue creado especialmente para ti, pensando en tu amor por
            la literatura y los libros. ¡Que tengas un día maravilloso lleno de
            buenas lecturas! 📚✨
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 ease-in-out"
          >
            🔄 Jugar de Nuevo
          </button>
        </div>

        {/* Final Decoration */}
        <div className="mt-12 text-4xl opacity-60 animate-pulse text-yellow-400">
          💎 🏆 👑 🏆 💎
        </div>
      </div>
    </div>
  )
}

export default Results
