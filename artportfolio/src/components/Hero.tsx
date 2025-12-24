import './Hero.css';

interface HeroProps {
  artistName: string;
}

export default function Hero({ artistName }: HeroProps) {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">{artistName}</h1>
          <div className="hero-categories">
            <span className="category-badge">Character Designer</span>
            <span className="category-badge">Illustrator</span>
            <span className="category-badge">Storyteller</span>
          </div>
          <p className="hero-subtitle">
            Bringing stories to life through biblical art and character design
          </p>
          <button className="cta-button" onClick={scrollToGallery}>
            View My Work
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
