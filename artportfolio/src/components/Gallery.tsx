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
      src: '/images/gallery/placeholder1.jpg',
      title: 'Biblical Character Design',
      description: 'Faith-inspired character illustration',
      tags: ['biblical', 'character', 'faith']
    },
    {
      id: 2,
      src: '/images/gallery/placeholder2.jpg',
      title: 'David and Goliath',
      description: 'Classic biblical story reimagined',
      tags: ['biblical', 'classic', 'character']
    },
    {
      id: 3,
      src: '/images/gallery/placeholder3.jpg',
      title: 'Noah\'s Ark',
      description: 'Children\'s book illustration',
      tags: ['biblical', 'children', 'illustration']
    },
    {
      id: 4,
      src: '/images/gallery/placeholder4.jpg',
      title: 'Angel Design',
      description: 'Heavenly messenger character concept',
      tags: ['biblical', 'angel', 'character']
    },
    {
      id: 5,
      src: '/images/gallery/placeholder5.jpg',
      title: 'Moses Character',
      description: 'Biblical hero character design',
      tags: ['biblical', 'character', 'hero']
    },
    {
      id: 6,
      src: '/images/gallery/placeholder6.jpg',
      title: 'Children of Faith',
      description: 'Young believers character lineup',
      tags: ['biblical', 'children', 'character']
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
        <h2 className="section-title">Character Design</h2>
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
