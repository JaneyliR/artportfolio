import './Contact.css';

interface ContactProps {
  artistName: string;
  artistEmail: string;
}

export default function Contact({ artistName, artistEmail }: ContactProps) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-description">
          I'm always interested in hearing about new projects and opportunities.
          Whether you need character design, illustration, or just want to say hello,
          feel free to reach out!
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <a href={`mailto:${artistEmail}`}>{artistEmail}</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 21C3 17.134 7.02944 14 12 14C16.9706 14 21 17.134 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4>Artist</h4>
              <p>{artistName}</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>Instagram</h4>
              <a href="https://www.instagram.com/j.s.rosario/" target="_blank" rel="noopener noreferrer">@j.s.rosario</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {artistName}. All rights reserved.</p>
      </footer>
    </section>
  );
}
