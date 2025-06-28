import React from "react"
import kittyAvatar from "../assets/kitty.jpg"

const Landing = ({ onStartGame }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-6xl font-serif font-bold text-yellow-400 mb-6 drop-shadow-lg">
            ¡Feliz Cumpleaños Bichooo 🐛!
          </h2>
        </div>

        {/* Hello Kitty Avatar */}
        <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm rounded-xl shadow-2xl border border-yellow-400/30 p-6 max-w-sm mx-auto mb-8 animate-slide-up">
          <div className="relative">
            <img
              src={kittyAvatar}
              alt="Hello Kitty"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-yellow-400/60 shadow-lg shadow-yellow-400/30 object-cover"
            />
            <div className="absolute -top-2 -right-2 text-2xl md:text-3xl animate-pulse">
              🎂
            </div>
          </div>
          <p className="text-lg md:text-xl font-serif text-white/90 mt-4 text-center">
            Quiz literario especial Andrea 📚
          </p>
        </div>

        {/* Game Instructions */}
        <div
          className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border border-yellow-400/40 p-6 max-w-lg mx-auto mb-8 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-xl font-serif font-semibold text-yellow-400 mb-3 text-center">
            📖 3 preguntas = 3 regalos???
          </h3>
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
      </div>
    </div>
  )
}

export default Landing
