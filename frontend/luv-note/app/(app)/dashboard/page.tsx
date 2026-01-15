"use client"

import React, { useRef } from 'react'
import './App.css'

const DashboardPage: React.FC = () => {
  // Templates data
  const templates = [
    { 
      id: 1, 
      title: 'Romantic Letter', 
      description: 'Express your deepest feelings with this beautiful love letter template. Perfect for anniversaries or special moments.', 
      icon: '💌',
      link: '/templates/romantic'
    },
    { 
      id: 2, 
      title: 'Anniversary Card', 
      description: 'Celebrate your memories and milestones with this elegant anniversary card template.', 
      icon: '🎉',
      link: '/templates/anniversary'
    },
    { 
      id: 3, 
      title: 'Memory Scrapbook', 
      description: 'Document your precious moments together in a beautiful digital scrapbook format.', 
      icon: '📔',
      link: '/templates/scrapbook'
    },
    { 
      id: 4, 
      title: 'Date Ideas', 
      description: 'A collection of creative date night suggestions to keep the romance alive.', 
      icon: '❤️',
      link: '/templates/dates'
    },
    { 
      id: 5, 
      title: 'Love Notes', 
      description: 'Quick and sweet love notes for everyday moments. Perfect for surprising your partner.', 
      icon: '💝',
      link: '/templates/notes'
    },
    { 
      id: 6, 
      title: 'Apology Letter', 
      description: 'Heartfelt apology template to help you express sincere regret and ask for forgiveness.', 
      icon: '🙏',
      link: '/templates/apology'
    }
  ]

  // Library files data
  const libraryFiles = [
    { 
      id: 1, 
      title: 'Our Love Story', 
      description: 'The complete story of our journey together, from our first meeting to today.', 
      date: '2024-01-15',
      icon: '📖',
      link: '/library/love-story' 
    },
    { 
      id: 2, 
      title: 'Valentine\'s Day 2024', 
      description: 'Special moments and memories from our unforgettable Valentine\'s Day celebration.', 
      date: '2024-02-14',
      icon: '💘',
      link: '/library/valentine' 
    },
    { 
      id: 3, 
      title: 'Birthday Wishes', 
      description: 'All the birthday messages, photos, and memories we\'ve shared over the years.', 
      date: '2024-03-10',
      icon: '🎂',
      link: '/library/birthday' 
    },
    { 
      id: 4, 
      title: 'Travel Memories', 
      description: 'Documented adventures and trips we\'ve taken together around the world.', 
      date: '2024-04-05',
      icon: '✈️',
      link: '/library/travel' 
    },
    { 
      id: 5, 
      title: 'Daily Gratitude', 
      description: 'A collection of daily things I love and appreciate about you.', 
      date: '2024-05-20',
      icon: '🙏',
      link: '/library/gratitude' 
    },
    { 
      id: 6, 
      title: 'Future Dreams', 
      description: 'Our shared dreams, goals, and plans for the future together.', 
      date: '2024-06-01',
      icon: '✨',
      link: '/library/future' 
    }
  ]

  // Refs for carousels
  const templatesRef = useRef<HTMLDivElement>(null)
  const libraryRef = useRef<HTMLDivElement>(null)

  // Scroll functions for carousels
  const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 350
      ref.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }

  const handleCardClick = (link: string) => {
    console.log('Opening:', link)
    // In a real app: router.push(link) or window.location.href = link
  }

  return (
    <div className="dashboard">
      {/* Main Header - Fixed Navigation */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo">LuvNote</div>
          <nav className="main-nav">
            <ul>
              <li><a href="/dashboard" className="active">Dashboard</a></li>
              <li><a href="/templates">Templates</a></li>
              <li><a href="/library">Library</a></li>
              <li><a href="/create">Create New</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/settings">Settings</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Dashboard Content with Carousels */}
      <main className="dashboard-content">
        {/* Welcome Section */}
        <div className="carousel-section">
          <div className="section-header">
            <h1 className="section-title">Welcome back! ✨</h1>
            <p>Browse templates or view your saved love notes</p>
          </div>
        </div>

        {/* Templates Carousel Section */}
        <section className="carousel-section">
          <div className="section-header">
            <h2 className="section-title">Templates</h2>
            <a href="/templates" className="view-all">View All Templates →</a>
          </div>
          
          <div className="horizontal-carousel-container">
            <button 
              className="carousel-btn prev"
              onClick={() => scrollCarousel(templatesRef, 'left')}
              aria-label="Scroll templates left"
            >
              ←
            </button>
            
            <div className="horizontal-carousel" ref={templatesRef}>
              {templates.map((template) => (
                <div 
                  key={template.id} 
                  className="carousel-card"
                  onClick={() => handleCardClick(template.link)}
                >
                  <div className="card-image">
                    <span style={{ fontSize: '3rem' }}>{template.icon}</span>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{template.title}</h3>
                    <p className="card-description">{template.description}</p>
                    <button 
                      className="card-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(template.link)
                      }}
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="carousel-btn next"
              onClick={() => scrollCarousel(templatesRef, 'right')}
              aria-label="Scroll templates right"
            >
              →
            </button>
          </div>
        </section>

        {/* Library Carousel Section */}
        <section className="carousel-section">
          <div className="section-header">
            <h2 className="section-title">Your Library</h2>
            <a href="/library" className="view-all">View All Files →</a>
          </div>
          
          <div className="horizontal-carousel-container">
            <button 
              className="carousel-btn prev"
              onClick={() => scrollCarousel(libraryRef, 'left')}
              aria-label="Scroll library left"
            >
              ←
            </button>
            
            <div className="horizontal-carousel" ref={libraryRef}>
              {libraryFiles.map((file) => (
                <div 
                  key={file.id} 
                  className="carousel-card library-card"
                  onClick={() => handleCardClick(file.link)}
                >
                  <div className="card-image">
                    <span style={{ fontSize: '3rem' }}>{file.icon}</span>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{file.title}</h3>
                    <p className="card-description">{file.description}</p>
                    <div className="card-date">Created: {file.date}</div>
                    <button 
                      className="card-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(file.link)
                      }}
                    >
                      Open File
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="carousel-btn next"
              onClick={() => scrollCarousel(libraryRef, 'right')}
              aria-label="Scroll library right"
            >
              →
            </button>
          </div>
        </section>

        {/* Quick Stats Section */}
        <div className="carousel-section">
          <div className="section-header">
            <h2 className="section-title">Your Love Note Stats</h2>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'center',
            padding: '2rem',
            background: 'linear-gradient(135deg, #ff7eb3 0%, #ff5580 100%)',
            borderRadius: '15px',
            color: 'white'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>42</div>
              <div>Love Notes Created</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>18</div>
              <div>Templates Used</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>7</div>
              <div>Favorites</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage