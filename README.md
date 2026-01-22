# Arjun Supramaniam - Portfolio

Modern, minimal portfolio website built with Next.js.

## Setup

1. Install dependencies: `npm install`
2. Add your profile photo to `public/images/profile.jpg`
3. Update your resume link in `content/data.ts` (contact.resume)
4. Run dev server: `npm run dev`
5. Visit: `http://localhost:3000`

## AI Setup (Google Gemini Free Tier)

The site uses **Google Gemini's free tier** for the AI chatbot feature.

### Getting Your API Key:

1. **Go to Google AI Studio**: [aistudio.google.com](https://aistudio.google.com)
2. **Sign in** with your Google account
3. **Create an API key** (keep it under free tier - don't enable billing)
4. **Copy your API key**

### Deploying with Gemini:

1. In Vercel: **Project Settings → Environment Variables**
2. Add: `GEMINI_API_KEY` = `your_gemini_api_key_here`
3. Redeploy (or it auto-redeploys)

### Free Tier Limits:

- **Model**: Gemini 2.0 Flash (free tier)
- **Rate limits**: Requests per minute/day (generous for portfolio use)
- **Cost**: $0 for free tier usage
- **Note**: Free tier has rate limits but should be plenty for a portfolio site

The AI will work automatically once you add the `GEMINI_API_KEY` environment variable!

## Deploy to Vercel

### Step 1: Prepare Your Code
1. Make sure your profile image is in `public/images/profile.jpg`
2. Make sure your resume is in `public/resume/` and the link is updated in `content/data.ts`
3. Test locally: `npm run dev` and verify everything works

### Step 2: Push to GitHub
```bash
# If you haven't initialized git yet:
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. **Go to [vercel.com](https://vercel.com)** and sign in (use GitHub to connect)
2. **Click "Add New Project"**
3. **Import your GitHub repository** (select the repo you just pushed)
4. **Configure Project:**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
5. **Add Environment Variable:**
   - Click "Environment Variables"
   - Add: `GEMINI_API_KEY` = `your_actual_gemini_api_key_here`
   - Make sure it's added to **Production**, **Preview**, and **Development**
6. **Click "Deploy"**
7. **Wait for deployment** (usually 1-2 minutes)
8. **Your site is live!** You'll get a URL like `your-portfolio.vercel.app`

### Step 4: Set Up Custom Domain (Optional)
1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow Vercel's DNS instructions

### Important Notes:
- **`.env.local` is gitignored** - don't commit your API key to GitHub
- **The site works without the AI** - if you don't add `GEMINI_API_KEY`, the AI will show a demo message
- **Vercel auto-deploys** when you push to GitHub (after the first deployment)

## Features

- Minimal, clean design
- Fast navigation with Next.js Link
- Responsive layout
- AI chatbot integration
- Social media links
- Resume download