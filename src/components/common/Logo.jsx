import { useState } from 'react'

export function Logo({ variant = 'light' }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className={`logo logo--${variant}`}>
      {!imageFailed ? (
        <img
          className="logo__image"
          src="/logo.png"
          alt="Bogazici Academy logo"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="logo__mark">BA</span>
      )}
      <span className="logo__text">Bogazici Academy</span>
    </div>
  )
}
