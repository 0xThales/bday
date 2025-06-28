import React from "react"

const Landing = ({ onStartGame }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-ink mb-4">
            🎂
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-yellow-400 mb-6 drop-shadow-lg">
            ¡Feliz Cumpleaños Andrea!
          </h2>
        </div>

        {/* Birthday Message */}
        <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm rounded-xl shadow-2xl border border-yellow-400/30 p-6 max-w-2xl mx-auto mb-8 animate-slide-up">
          <p className="text-xl md:text-2xl font-serif text-white/90 mb-6 leading-relaxed">
            Quiz literario especial de cumpleaños. Cada respuesta correcta
            desbloqueará uno de tus regalos. 📚
          </p>

          <div className="bg-yellow-400/20 border-l-4 border-yellow-400 p-4 rounded mb-6">
            <p className="text-lg font-medium text-yellow-100">
              "Un libro es un sueño que tienes en tus manos"
              <span className="block text-sm font-normal italic mt-1 text-yellow-200">
                - Neil Gaiman
              </span>
            </p>
          </div>
        </div>

        {/* Game Instructions */}
        <div
          className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border border-yellow-400/40 p-6 max-w-xl mx-auto mb-8 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-2xl font-serif font-semibold text-yellow-400 mb-4">
            📖 Instrucciones
          </h3>
          <ul className="text-left space-y-2 text-white/90">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Responde 3 preguntas sobre literatura
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Cada respuesta correcta desbloquea un regalo
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Las preguntas están pensadas especialmente para ti
            </li>
          </ul>
        </div>

        {/* Start Button */}
        <div
          className="animate-bounce-gentle"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            onClick={onStartGame}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold py-4 px-12 rounded-lg shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 ease-in-out text-xl md:text-2xl font-serif inline-flex items-center gap-3 border-2 border-yellow-300"
          >
            <span>🎯</span>
            ¡Comenzar el Quiz!
            <span>📚</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-4xl opacity-60 animate-pulse text-yellow-400">
          💎 ✨ 🏆 ✨ 💎
        </div>
      </div>
    </div>
  )
}

export default Landing
