import React, { useState, useEffect, useCallback } from 'react'

function Slideshow() {
  // Image paths pointing to the portfolio folder in public directory
  // Using absolute paths starting with '/' to access public folder assets
  const images = [
    '/portfolio/photo_2026-06-06_22-41-41.jpg',
    '/portfolio/photo_2026-06-06_22-41-44.jpg',
    '/portfolio/photo_2026-06-06_22-41-45.jpg',
    '/portfolio/photo_2026-06-06_22-41-46.jpg',
    '/portfolio/photo_2026-06-06_22-41-47.jpg',
    '/portfolio/photo_2026-06-06_22-41-49.jpg',
    '/portfolio/photo_2026-06-06_22-41-50.jpg',
    '/portfolio/photo_2026-06-06_22-41-51.jpg',
    '/portfolio/photo_2026-06-06_22-41-52.jpg',
    '/portfolio/photo_2026-06-06_22-41-53.jpg',
    '/portfolio/photo_2026-06-06_22-41-54.jpg',
    '/portfolio/photo_2026-06-06_22-41-55.jpg',
    '/portfolio/photo_2026-06-06_22-41-56.jpg',
    '/portfolio/photo_2026-06-06_22-41-58.jpg',
    '/portfolio/photo_2026-06-06_22-41-59 (2).jpg',
    '/portfolio/photo_2026-06-06_22-41-59.jpg',
    '/portfolio/photo_2026-06-06_22-42-03.jpg',
    '/portfolio/photo_2026-06-06_22-42-05.jpg',
    '/portfolio/photo_2026-06-06_22-42-06.jpg',
    '/portfolio/photo_2026-06-06_22-42-07.jpg',
    '/portfolio/photo_2026-06-06_22-42-08.jpg',
    '/portfolio/photo_2026-06-06_22-42-10.jpg',
    '/portfolio/photo_2026-06-06_22-42-11.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // useCallback to prevent stale closure issues in useEffect
  // This ensures the functions always have access to the latest state
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  // Autoplay effect with pause-on-hover functionality
  // Fixed: Added nextSlide to dependency array to prevent stale closures
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 4500)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  return (
    <section className="slideshow-section">
      <div className="slideshow-header">
        <h2>My Work Gallery</h2>
        <p className="slideshow-subtitle">PC Assembly • Troubleshooting • CCTV Installation • Technical Projects</p>
      </div>
      <div 
        className="slideshow-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slideshow-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="slide-overlay"></div>
              {/* Added onError handler to detect image loading issues */}
              <img 
                src={image} 
                alt={`Gallery photo ${index + 1}`} 
                onError={(e) => {
                  console.error(`Failed to load image: ${image}`)
                  e.target.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
        {/* Previous button - fixed to use useCallback function */}
        <button className="slideshow-nav prev" onClick={prevSlide} aria-label="Previous slide">
          ‹
        </button>
        {/* Next button - fixed to use useCallback function */}
        <button className="slideshow-nav next" onClick={nextSlide} aria-label="Next slide">
          ›
        </button>
        {/* Dot indicators - fixed to use useCallback function */}
        <div className="slideshow-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slideshow
