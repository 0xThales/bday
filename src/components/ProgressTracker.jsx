import React from "react"

const ProgressTracker = ({
  currentQuestion,
  totalQuestions,
  unlockedGifts,
}) => {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-white/80 mb-2">
          <span>Progreso del Quiz</span>
          <span>
            {currentQuestion + 1} de {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Gift Status - Mobile Optimized */}
      <div className="flex gap-2 md:gap-4 justify-center">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const isUnlocked = index < unlockedGifts.length
          const isCurrent = index === currentQuestion
          const isCompleted = index < currentQuestion

          return (
            <div
              key={index}
              className={`
                flex-1 max-w-[100px] p-2 md:p-4 rounded-lg border-2 transition-all duration-300 text-center
                ${
                  isUnlocked
                    ? "bg-green-800/80 border-green-400 text-green-100"
                    : isCurrent
                    ? "bg-yellow-500/30 border-yellow-400 text-white animate-pulse"
                    : isCompleted
                    ? "bg-red-800/80 border-red-400 text-red-200"
                    : "bg-slate-800/50 border-slate-600 text-white/50"
                }
              `}
            >
              <div className="text-lg md:text-2xl mb-1 md:mb-2">
                {isUnlocked
                  ? "🎁"
                  : isCurrent
                  ? "🎯"
                  : isCompleted
                  ? "❌"
                  : "📦"}
              </div>
              <div className="text-xs md:text-sm font-medium leading-tight">
                {isUnlocked
                  ? "✓"
                  : isCurrent
                  ? "Actual"
                  : isCompleted
                  ? "X"
                  : "?"}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressTracker
