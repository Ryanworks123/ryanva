
function CVButton() {
  const handleViewCV = () => {
    // Add timestamp to prevent caching
    window.open(`/CV.pdf?t=${Date.now()}`, '_blank')
  }

  return (
    <a
      href={`/CV.pdf?t=${Date.now()}`}
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
