import { useEffect, useState } from 'react';
import { addWatermarkToImage } from '../utils/watermark';
import './SeriesProject.css';

interface CharacterImage {
  label: string;
  src: string;
  alt: string;
}

interface SupportingCharacter {
  name: string;
  country: string;
  note: string;
  src: string;
}

interface SeriesProjectProps {
  artistName: string;
  artistEmail: string;
}

export default function SeriesProject({ artistName, artistEmail }: SeriesProjectProps) {
  const [selectedImage, setSelectedImage] = useState<CharacterImage | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const mainCharacterImages: CharacterImage[] = [
    {
      label: 'Final Character Illustration',
      src: '/images/gallery/Camila.png',
      alt: 'Final character illustration of Camila Rojas'
    },
    {
      label: 'Expression Sheet',
      src: '/images/gallery/CamilaExpressionSheet.png',
      alt: 'Expression sheet showing six expressions'
    },
    {
      label: 'Character Turnaround',
      src: '/images/gallery/Turnaround.png',
      alt: 'Character turnaround for Camila Rojas'
    },
    {
      label: 'Concept Art',
      src: '/images/gallery/ConceptCamila.png',
      alt: 'Concept art for Camila Rojas'
    }
  ];

  const supportingCharacters: SupportingCharacter[] = [];

  const handleDownload = async (image: CharacterImage) => {
    try {
      const watermarkedUrl = await addWatermarkToImage(
        image.src,
        artistName,
        artistEmail
      );

      const link = document.createElement('a');
      link.href = watermarkedUrl;
      link.download = `${image.label.replace(/\s+/g, '_')}_${artistName.replace(/\s+/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Error downloading image. Please try again.');
    }
  };

  return (
    <section id="series" className="series-section">
      <div className="series-inner">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">
            Character Design &amp; Visual Development 
          </h2>
          <h2>(Original Animated Series Concept)</h2>
          <p className="series-subheader">The World We Play In</p>
          <p className="series-description">
            An animation-ready project package focused on motion, culture, and heart, created
            to bring the world together through soccer, a sport where we do not need to share
            a language to become friends.
          </p>
        </div>

        <div className="series-block reveal-on-scroll">
          <div className="series-text">
            <h3 className="series-heading">Series Overview</h3>
            <p>
              A character-driven animated series about children from different countries who
              connect through play, movement, and everyday life. Through slice-of-life moments
              and small challenges, the show explores identity, empathy, and friendship in a
              warm, playful tone designed for a Disney Jr. / Nickelodeon audience.
            </p>
          </div>
        </div>

        <div className="series-block reveal-on-scroll">
          <div className="block-header">
            <h3 className="series-heading">Main Character</h3>
          </div>
          <div className="main-character-layout">
            <div className="main-character-details">
              <h4 className="series-character-name">Camila Rojas</h4>
              <p className="series-character-role">Main Character</p>
              <p className="series-character-description">
                A young Colombian girl who loves soccer and sees the world through movement
                and rhythm. Confident on the field but thoughtful off it, she leads with
                action before words, using play to connect, process emotions, and find
                confidence.
              </p>
            </div>
            <div className="series-grid main-character-grid">
              {mainCharacterImages.map((image) => (
                <figure key={image.label} className="series-image-card main-character-card">
                  <button
                    type="button"
                    className="series-image-button"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="series-image-frame">
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                  </button>
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="series-block reveal-on-scroll">
          <div className="block-header">
            <h3 className="series-heading">Supporting Characters</h3>
          </div>

          <div className="series-grid supporting-grid">
            {supportingCharacters.map((character) => (
              <article key={character.name} className="support-card">
                <div className="series-image-frame">
                  <img src={character.src} alt={character.name} loading="lazy" />
                </div>
                <div className="support-info">
                  <h4>{character.name}</h4>
                  <p className="support-country">{character.country}</p>
                  <p className="support-note">{character.note}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="series-character-description">
            More character designs in progress (Japan, Sweden, Goa, India, and Brazil).
          </p>
        </div>
      </div>

      {selectedImage && (
        <div className="series-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="series-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="series-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="series-lightbox-info">
              <h3>{selectedImage.label}</h3>
              <button
                type="button"
                className="series-download-btn"
                onClick={() => handleDownload(selectedImage)}
              >
                Download with Watermark
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
