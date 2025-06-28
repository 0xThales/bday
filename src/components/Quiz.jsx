import React, { useState, useEffect } from "react"
import ProgressTracker from "./ProgressTracker"

const Quiz = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  score,
  unlockedGifts,
}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null)
    setShowFeedback(false)
    setIsAnswered(false)
  }, [questionNumber])

  const handleOptionSelect = (option) => {
    if (isAnswered) return // Prevent multiple selections

    setSelectedOption(option)
    setIsAnswered(true)

    // Show immediate visual feedback
    setTimeout(() => {
      setShowFeedback(true)
    }, 100)

    // Call parent handler after a brief delay for better UX
    setTimeout(() => {
      onAnswer(option, option.isCorrect)
    }, 1500)
  }

  const getOptionClass = (option) => {
    const baseClass =
      "bg-gradient-to-r from-blue-900/70 to-slate-800/70 hover:from-blue-800/80 hover:to-slate-700/80 border-2 border-blue-600/50 hover:border-yellow-400 rounded-lg p-3 md:p-4 cursor-pointer transition-all duration-500 ease-in-out transform text-white"

    if (!showFeedback) {
      return selectedOption?.id === option.id
        ? `${baseClass} border-yellow-400 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 scale-105 shadow-lg shadow-yellow-400/30`
        : `${baseClass} hover:scale-105`
    }

    if (option.isCorrect) {
      return `${baseClass} bg-gradient-to-r from-green-500 to-green-600 border-green-300 text-white scale-110 shadow-xl shadow-green-400/50 animate-pulse`
    } else if (selectedOption?.id === option.id && !option.isCorrect) {
      return `${baseClass} bg-gradient-to-r from-red-600 to-red-700 border-red-400 text-white scale-105 shadow-lg shadow-red-400/50`
    }

    return `${baseClass} opacity-30`
  }

  return (
    <div className="min-h-screen p-3 md:p-6 flex flex-col">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full mb-4 md:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-serif font-bold text-yellow-400 drop-shadow-lg mb-2 md:mb-0">
            Literatura Millonaria
          </h1>
          <div className="text-center md:text-right">
            <div className="text-base md:text-lg font-semibold text-white">
              Pregunta {questionNumber} de {totalQuestions}
            </div>
            <div className="text-sm text-yellow-300">Regalos: {score}</div>
          </div>
        </div>

        {/* Progress Tracker */}
        <ProgressTracker
          currentQuestion={questionNumber - 1}
          totalQuestions={totalQuestions}
          unlockedGifts={unlockedGifts}
        />
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto w-full flex-1 flex items-center">
        <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-yellow-400/60 p-4 md:p-8 animate-fade-in w-full">
          {/* Question Text */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-3xl font-serif font-semibold text-white mb-4 md:mb-6 leading-tight">
              {question.question}
            </h2>

            {/* Quote */}
            <div className="bg-blue-900/30 border-l-4 border-yellow-400 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
              <blockquote className="text-base md:text-xl font-serif italic text-yellow-100 leading-relaxed">
                "{question.quote.english}"
              </blockquote>
              <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-yellow-400/30">
                <blockquote className="text-base md:text-xl font-serif italic text-yellow-200 leading-relaxed">
                  "{question.quote.spanish}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {question.options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                disabled={isAnswered}
                className={getOptionClass(option)}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full font-bold flex items-center justify-center text-xs md:text-sm flex-shrink-0 transition-all duration-300 ${
                      showFeedback && option.isCorrect
                        ? "bg-green-400 text-white animate-bounce"
                        : showFeedback &&
                          selectedOption?.id === option.id &&
                          !option.isCorrect
                        ? "bg-red-400 text-white"
                        : selectedOption?.id === option.id
                        ? "bg-yellow-400 text-black scale-110"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    {showFeedback && option.isCorrect
                      ? "✓"
                      : showFeedback &&
                        selectedOption?.id === option.id &&
                        !option.isCorrect
                      ? "✗"
                      : option.id}
                  </div>
                  <span className="text-left font-medium text-sm md:text-base leading-tight">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="mt-8 text-center animate-fade-in">
              {selectedOption?.isCorrect ? (
                <div className="p-6 bg-gradient-to-r from-green-600/95 to-green-700/95 border-3 border-green-300 rounded-xl shadow-2xl shadow-green-400/50 animate-pulse">
                  <div className="text-6xl mb-3 animate-bounce">🎉</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                    ¡CORRECTO!
                  </h3>
                  <p className="text-green-100 text-lg font-semibold mb-2">
                    ¡Excelente! Has desbloqueado un regalo
                  </p>
                  <div className="text-yellow-300 text-2xl animate-spin inline-block">
                    ⭐
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gradient-to-r from-red-700/95 to-red-800/95 border-3 border-red-300 rounded-xl shadow-2xl shadow-red-400/50">
                  <div className="text-5xl mb-3">❌</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                    Incorrecto
                  </h3>
                  <p className="text-red-100 text-lg mb-2">
                    La respuesta correcta era:
                  </p>
                  <p className="text-yellow-300 text-xl font-bold">
                    {question.options.find((opt) => opt.isCorrect)?.text}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
