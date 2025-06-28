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
    setShowFeedback(true)
    setIsAnswered(true)

    // Call parent handler
    onAnswer(option, option.isCorrect)
  }

  const getOptionClass = (option) => {
    const baseClass =
      "bg-gradient-to-r from-blue-900/70 to-slate-800/70 hover:from-blue-800/80 hover:to-slate-700/80 border-2 border-blue-600/50 hover:border-yellow-400 rounded-lg p-4 cursor-pointer transition-all duration-300 ease-in-out transform text-white"

    if (!showFeedback) {
      return selectedOption?.id === option.id
        ? `${baseClass} border-yellow-400 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 scale-105`
        : `${baseClass} hover:scale-105`
    }

    if (option.isCorrect) {
      return `${baseClass} bg-gradient-to-r from-green-600 to-green-700 border-green-400 text-white scale-105`
    } else if (selectedOption?.id === option.id && !option.isCorrect) {
      return `${baseClass} bg-gradient-to-r from-red-600 to-red-700 border-red-400 text-white scale-105`
    }

    return `${baseClass} opacity-40`
  }

  return (
    <div className="min-h-screen p-6 flex flex-col">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-yellow-400 drop-shadow-lg">
            Literatura Millonaria
          </h1>
          <div className="text-right">
            <div className="text-lg font-semibold text-white">
              Pregunta {questionNumber} de {totalQuestions}
            </div>
            <div className="text-sm text-yellow-300">
              Regalos desbloqueados: {score}
            </div>
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
        <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-yellow-400/60 p-8 animate-fade-in w-full">
          {/* Question Text */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-6">
              {question.question}
            </h2>

            {/* Quote */}
            <div className="bg-blue-900/30 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
              <blockquote className="text-lg md:text-xl font-serif italic text-yellow-100 leading-relaxed">
                "{question.quote.english}"
              </blockquote>
              <div className="mt-3 pt-3 border-t border-yellow-400/30">
                <blockquote className="text-lg md:text-xl font-serif italic text-yellow-200 leading-relaxed">
                  "{question.quote.spanish}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                disabled={isAnswered}
                className={getOptionClass(option)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center text-sm flex-shrink-0">
                    {option.id}
                  </div>
                  <span className="text-left font-medium">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="mt-8 text-center animate-fade-in">
              {selectedOption?.isCorrect ? (
                <div className="p-6 bg-gradient-to-r from-green-800/90 to-green-900/90 border-2 border-green-400 rounded-lg">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl font-bold text-green-100 mb-2">
                    ¡Correcto!
                  </h3>
                  <p className="text-green-200 mb-4">
                    Has desbloqueado: <strong>❓❓❓</strong>
                  </p>
                </div>
              ) : (
                <div className="p-6 bg-gradient-to-r from-red-800/90 to-red-900/90 border-2 border-red-400 rounded-lg">
                  <div className="text-4xl mb-2">❌</div>
                  <h3 className="text-xl font-bold text-red-100 mb-2">
                    Respuesta incorrecta
                  </h3>
                  <p className="text-red-200 mb-4">
                    La respuesta correcta era:{" "}
                    <strong>
                      {question.options.find((opt) => opt.isCorrect)?.text}
                    </strong>
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
