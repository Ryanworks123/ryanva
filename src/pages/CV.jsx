import React from 'react'

function CVButton() {
  const handleViewCV = () => {
    window.open('/CV.pdf', '_blank')
  }

  return (
    <a 
      href="/CV.pdf" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="cta-secondary"
      onClick={(e) => {
        e.preventDefault()
        handleViewCV()
      }}
    >
      View CV
    </a>
  )
}

export default CVButton
