import { useState } from 'react';
import { addWatermarkToImage } from '../utils/watermark';
import './Gallery.css';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  tags: string[];
}

interface GalleryProps {
  artistName: string;
  artistEmail: string;
}

export default function Gallery({ artistName, artistEmail }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Sample gallery items - replace with your actual artwork from public/images/gallery/
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/images/gallery/blindingLights.png',
      title: 'Blinding Lights',
      description: 'Illustration inspired by the song "Blinding Lights"',
      tags: ['music', 'illustration', 'character']
    },
    {
      id: 2,
      src: '/images/gallery/babyJesusIllustration.png',
      title: 'Baby Jesus',
      description: 'Classic biblical story reimagined',
      tags: ['biblical', 'classic', 'character', 'jesus']
    },
    {
      id: 3,
      src: '/images/gallery/Esther.png',
      title: 'Esther Character',
      description: 'Biblical hero character design, fully rendered illustration',
      tags: ['biblical', 'character', 'hero']
    },
    {
      id: 4,
      src: '/images/gallery/Jesus.jpeg',
      title: 'Jesus Character Design',
      description: 'Illustration of Jesus Christ, inspired by biblical descriptions',
      tags: ['biblical', 'jesus', 'character']
    },
    {
      id: 5,
      src: '/images/gallery/michalexpressionsheet.png',
      title: 'Michal Expression Sheet',
      description: 'Michal, daughter of King Saul, expression sheet for character design. Will be used in an upcoming project',
      tags: ['biblical', 'expression', 'character']
    },
    {
      id: 6,
      src: '/images/gallery/DAVID.png',
      title: 'David Character Design',
      description: 'Illustration of David, inspired by biblical descriptions',
      tags: ['biblical', 'david', 'character']
    },
    {
      id: 7,
      src: '/images/gallery/davidchibi.png',
      title: 'Chibi David',
      description: 'Chibi style illustration of David from the Bible',
      tags: ['david', 'character', 'biblical']
    },
    {
      id: 8,
      src: '/images/gallery/coldoutside.png',
      title: 'Winter\'s Air',
      description: 'Children\'s book illustration that will be featured in a upcoming book in the future',
      tags: ['winter', 'children', 'illustration']
    },
    {
      id: 9,
      src: '/images/gallery/CosmicPulse.png',
      title: 'Hero Design',
      description: 'Superhero character design with cosmic powers, will be used in a future storyline',
      tags: ['superhero', 'design', 'character']
    },
    {
      id: 10,
      src: '/images/gallery/aeren.PNG',
      title: 'Fantasy Character Design',
      description: 'Merman inspired character illustration',
      tags: ['fantasy', 'character', 'underwater']
    },
  ];

  const tags = ['all', ...Array.from(new Set(galleryItems.flatMap(item => item.tags)))];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.tags.includes(activeFilter));

  const handleDownload = async (item: GalleryItem) => {
    try {
      const watermarkedUrl = await addWatermarkToImage(
        item.src,
        artistName,
        artistEmail
      );
      
      const link = document.createElement('a');
      link.href = watermarkedUrl;
      link.download = `${item.title.replace(/\s+/g, '_')}_${artistName.replace(/\s+/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Error downloading image. Please try again.');
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <h2 className="section-title">Character Design & Illustrations</h2>
        <p className="section-subtitle">Explore my character artwork and designs</p>
      </div>

      <div className="filter-buttons">
        {tags.map(tag => (
          <button
            key={tag}
            className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-item">
            <div className="image-wrapper" onClick={() => setSelectedImage(item)}>
              <img src={item.src} alt={item.title} />
              <div className="image-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <div className="lightbox-tags">
                {selectedImage.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <button 
                className="download-btn"
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
