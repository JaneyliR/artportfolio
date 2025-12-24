import './Books.css';

interface Book {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  role: string;
  year: string;
  link?: string;
}

export default function Books() {
  const books: Book[] = [
    {
      id: 1,
      title: 'Does Heaven Take Kids Like Us?',
      coverImage: '/images/doesheaventakekids.jpeg',
      description: 'A heartwarming story that explores faith and belonging through the eyes of children. Published December 11, 2025.',
      role: 'Illustrated & Authored',
      year: '2025',
      link: 'https://a.co/d/3FEFmd2'
    },
    {
      id: 2,
      title: 'Mystery Overboard',
      coverImage: '/images/mysteryoverboard.png',
      description: 'An exciting mystery adventure that will keep young readers on the edge of their seats. Published May 6, 2025.',
      role: 'Illustrated & Authored',
      year: '2025',
      link: 'https://a.co/d/hqNC1Dd'
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
              <img src={book.coverImage} alt={book.title} />
              <div className="book-overlay">
                <span className="book-year">{book.year}</span>
              </div>
            </div>
            <div className="book-info">
              <span className="book-role">{book.role}</span>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-description">{book.description}</p>
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
    </section>
  );
}
