import React, { useState, useRef, useEffect } from "react"
import whoWantsMusic from "../assets/who_wants.mp3"

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.loop = true
    }
  }, [volume])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-yellow-400/40 p-2 md:p-3">
      <audio ref={audioRef} loop>
        <source src={whoWantsMusic} type="audio/mpeg" />
      </audio>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={toggleMusic}
          className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black transition-all duration-200 transform hover:scale-105"
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h1a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8 18H7a1.5 1.5 0 0 1-1.5-1.5v-13zM12.5 3.5A1.5 1.5 0 0 1 14 2h1a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 15 18h-1a1.5 1.5 0 0 1-1.5-1.5v-13z" />
            </svg>
          ) : (
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11V15.89a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84z" />
            </svg>
          )}
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <svg
            className="w-3 h-3 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.383 3.076A1 1 0 0 1 10 4v12a1 1 0 0 1-1.707.707L4.586 13H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.586l3.707-3.707a1 1 0 0 1 1.09-.217zM12.293 7.293a1 1 0 0 1 1.414 0 4 4 0 0 1 0 5.656 1 1 0 0 1-1.414-1.414 2 2 0 0 0 0-2.828 1 1 0 0 1 0-1.414z" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #facc15 0%, #facc15 ${
                volume * 100
              }%, #475569 ${volume * 100}%, #475569 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default MusicControl
