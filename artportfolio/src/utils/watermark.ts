/**
 * Adds a watermark to an image with artist name and email
 * Returns a data URL of the watermarked image
 */
export async function addWatermarkToImage(
  imageSrc: string,
  artistName: string,
  artistEmail: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the original image
        ctx.drawImage(img, 0, 0);

        // Configure watermark style
        const fontSize = Math.max(img.width / 40, 16);
        ctx.font = `${fontSize}px Space Grotesk, sans-serif`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 2;

        // Add watermark text at bottom right
        const padding = 20;
        const lineHeight = fontSize * 1.4;
        
        // Draw artist name
        const nameText = `© ${artistName}`;
        const nameMetrics = ctx.measureText(nameText);
        const nameX = img.width - nameMetrics.width - padding;
        const nameY = img.height - lineHeight - padding;
        
        ctx.strokeText(nameText, nameX, nameY);
        ctx.fillText(nameText, nameX, nameY);

        // Draw email
        const emailMetrics = ctx.measureText(artistEmail);
        const emailX = img.width - emailMetrics.width - padding;
        const emailY = img.height - padding;
        
        ctx.strokeText(artistEmail, emailX, emailY);
        ctx.fillText(artistEmail, emailX, emailY);

        // Also add a subtle watermark in the center (semi-transparent)
        ctx.save();
        ctx.globalAlpha = 0.15;
        ctx.font = `bold ${fontSize * 2}px Sora, sans-serif`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.translate(img.width / 2, img.height / 2);
        ctx.rotate(-Math.PI / 6); // Rotate 30 degrees
        ctx.fillText(artistName, 0, 0);
        ctx.restore();

        // Convert to data URL
        const dataUrl = canvas.toDataURL('image/png');
        resolve(dataUrl);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    // Handle CORS for external images
    if (imageSrc.startsWith('http')) {
      // For demo purposes, we'll just use the original image
      // In production, you'd need a proxy or CORS-enabled images
      img.src = imageSrc;
    } else {
      img.src = imageSrc;
    }
  });
}
