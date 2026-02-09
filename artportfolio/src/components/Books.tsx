import { useState } from 'react';
import './Books.css';

interface Book {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  role: string;
  year: string;
  blurCover?: boolean;
  link?: string;
  artwork?: { src: string; alt: string }[];
}

export default function Books() {
  const [activeArtwork, setActiveArtwork] = useState<Book['artwork'] | null>(null);

  const books: Book[] = [
    {
      id: 1,
      title: 'Does Heaven Take Kids Like Us?',
      coverImage: '/images/books/doesheaventakekids.jpeg',
      description: 'A heartwarming story that explores faith and belonging through the eyes of teens. Published December 11, 2025.',
      role: 'Illustrated & Authored',
      year: '2025',
      link: 'https://a.co/d/3FEFmd2',
      artwork: [
        { src: '/images/gallery/Renata.png', alt: 'Renata character artwork' },
        { src: '/images/gallery/Tomas.png', alt: 'Tomas character artwork' },
        { src: '/images/gallery/Adanna.png', alt: 'Adanna character artwork' },
        { src: '/images/gallery/Elias.png', alt: 'Elias character artwork' }
      ]
    },
    {
      id: 2,
      title: 'Mystery Overboard',
      coverImage: '/images/books/mysteryoverboard.png',
      description: 'A summer vacation gone wrong. A boat full of suspects. One kid caught in the middle. Published May 6, 2025.',
      role: 'Illustrated & Authored',
      year: '2025',
      link: 'https://a.co/d/hqNC1Dd'
    },
    {
      id: 3,
      title: 'Overnight Sensation',
      coverImage: '/images/books/Progress.png',
      description: 'A boy who feels invisible wishes to be seen, and one night his wish comes true as he becomes an overnight sensation. Upcoming September 2026.',
      role: 'Upcoming Release',
      year: 'Sept. 2026',
      blurCover: true
    },
  ];

  return (
    <section id="books" className="books-section">
      <div className="section-header">
        <h2 className="section-title">Books</h2>
        <p className="section-subtitle">Illustrated & Authored by Me</p>
      </div>

      <div className="books-container">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-cover">
              <img
                src={book.coverImage}
                alt={book.title}
                className={book.blurCover ? 'book-cover-blur' : undefined}
              />
              <div className="book-overlay">
                <span className="book-year">{book.year}</span>
              </div>
            </div>
            <div className="book-info">
              <span className="book-role">{book.role}</span>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-description">{book.description}</p>
              {book.artwork && (
                <button
                  type="button"
                  className="book-art-btn"
                  onClick={() => setActiveArtwork(book.artwork ?? null)}
                >
                  View Character Art
                </button>
              )}
              {book.link && (
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="amazon-btn"
                >
                  View on Amazon
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {activeArtwork && (
        <div className="book-art-modal" onClick={() => setActiveArtwork(null)}>
          <div className="book-art-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="book-art-close"
              onClick={() => setActiveArtwork(null)}
              aria-label="Close character art"
            >
              ×
            </button>
            <h3>Character Artwork</h3>
            <div className="book-art-grid">
              {activeArtwork.map((art) => (
                <div key={art.src} className="book-art-card">
                  <img src={art.src} alt={art.alt} loading="lazy" />
                  <p>{art.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
