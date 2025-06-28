import React from "react"

const Confetti = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    color: ["#FFD700", "#FF6B9D", "#4ECDC4", "#45B7D1", "#96CEB4"][
      Math.floor(Math.random() * 5)
    ],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 opacity-80"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.duration}s linear infinite`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
