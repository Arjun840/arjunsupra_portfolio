# Arjun Supramaniam - Portfolio

Modern, minimal portfolio website built with Next.js.

## Setup

1. Install dependencies: `npm install`
2. Add your profile photo to `public/images/profile.jpg`
3. Update your resume link in `content/data.ts` (contact.resume)
4. Run dev server: `npm run dev`
5. Visit: `http://localhost:3000`

## Free/Low-Cost AI Options

For the AI chatbot feature, here are free and low-cost options:

### Free Options:
1. **OpenAI Free Tier** (Limited)
   - $5 free credit when you sign up
   - GPT-3.5-turbo is very affordable (~$0.0015 per 1K tokens)
   - Set up: Add `OPENAI_API_KEY` in Vercel environment variables

2. **Anthropic Claude** (Free Tier)
   - $5 free credit
   - Claude 3 Haiku is very cheap (~$0.25 per 1M input tokens)
   - Update the API route to use Anthropic's API

3. **Google Gemini** (Free Tier)
   - Generous free tier
   - Update API route to use Gemini API

4. **Hugging Face Inference API** (Free)
   - Free tier available
   - Use smaller open-source models

### Low-Cost Options:
- **OpenAI GPT-4o-mini**: ~$0.15 per 1M input tokens (very affordable)
- **Anthropic Claude 3 Haiku**: ~$0.25 per 1M input tokens
- **Groq**: Fast inference, pay-per-use, very affordable

### Recommendation:
Start with OpenAI's GPT-4o-mini - it's already configured in the code and costs almost nothing for a portfolio site (likely <$1/month for light usage).

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variable: `OPENAI_API_KEY=your_key_here`
4. Deploy!

## Features

- Minimal, clean design
- Fast navigation with Next.js Link
- Responsive layout
- AI chatbot integration
- Social media links
- Resume download