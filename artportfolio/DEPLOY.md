# Deploy to Vercel

## Prerequisites
- A [Vercel account](https://vercel.com/signup) (free)
- Git repository with your code pushed to GitHub, GitLab, or Bitbucket

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)** and sign in

3. **Click "Add New Project"**

4. **Import your repository**
   - Select your art portfolio repository
   - Vercel will auto-detect it's a Vite project

5. **Configure your project** (usually auto-detected):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**
   - Your site will be live in 1-2 minutes!
   - You'll get a URL like: `your-portfolio.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Answer "yes" to link and deploy

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `yourname.art`)
4. Follow the DNS configuration instructions

## Environment Variables

If you need environment variables:
1. In Vercel Dashboard → Settings → Environment Variables
2. Add your variables (none required for this portfolio currently)

## Automatic Deployments

Once connected to Git:
- Every push to `main` branch automatically deploys to production
- Pull requests get preview deployments
- Rollback to any previous deployment with one click

## Your Portfolio is Ready! 🎨

- ✅ Optimized Vite build
- ✅ Automatic image optimization
- ✅ Global CDN distribution
- ✅ HTTPS enabled
- ✅ Fast loading times

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)
