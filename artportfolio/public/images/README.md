# Image Folders

## 📁 Folder Structure

### `/gallery/` - Your Artwork
Place your character design and biblical illustration images here.

**Recommended naming:**
- `biblical-character-1.jpg`
- `david-goliath.jpg`
- `angel-design.jpg`
- `noah-ark.jpg`
- etc.

**Image specs:**
- Format: JPG or PNG
- Recommended size: 1200x1600px (portrait) or similar
- Quality: High resolution for best display

### `/books/` - Your Book Covers
Place your book cover images here.

**Required files:**
- `does-heaven-take-kids.jpg` (or .png)
- `mystery-overboard.jpg` (or .png)

**Image specs:**
- Format: JPG or PNG
- Recommended size: 800x1200px (standard book cover ratio)
- Quality: High resolution

## 🔄 After Adding Images

Once you add your images to these folders:

1. **Update Gallery**: Edit `/src/components/Gallery.tsx`
   - Change the `src` paths to match your actual filenames
   - Example: `src: '/images/gallery/your-image.jpg'`

2. **Update Books**: Edit `/src/components/Books.tsx`
   - Change the `coverImage` paths to match your book cover filenames
   - Example: `coverImage: '/images/books/does-heaven-take-kids.jpg'`

## 💡 Tips

- Use descriptive filenames (e.g., `david-and-goliath.jpg` instead of `img1.jpg`)
- Keep file sizes reasonable (under 2MB) for faster loading
- Maintain consistent image quality across your portfolio
- Add new images to the gallery array in Gallery.tsx with appropriate tags
