# Email Notification Setup Guide

Your portfolio now has email notifications! When someone submits the contact form, you'll receive an email with their details.

## Step 1: Sign up for Resend (Free)

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. Verify your email address

## Step 2: Get your API Key

1. In the Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it "Portfolio Contact Form"
4. Copy the API key (starts with `re_...`)

## Step 3: Configure Vercel Environment Variables

1. Go to your project on [vercel.com](https://vercel.com)
2. Click on **Settings** → **Environment Variables**
3. Add two environment variables:

   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key (paste the key you copied)
   - Environment: Production, Preview, and Development

   **Variable 2:**
   - Name: `RECIPIENT_EMAIL`
   - Value: Your email address where you want to receive notifications
   - Environment: Production, Preview, and Development

4. Click **Save** for each variable

## Step 4: Redeploy

After adding the environment variables, redeploy your site:
- Vercel will automatically redeploy when you push changes to GitHub
- OR manually trigger a redeploy from the Vercel dashboard

## Step 5: Test It!

1. Go to your live portfolio website
2. Fill out the contact form
3. Submit it
4. You should receive an email within seconds!

## Important Notes

- **Free tier limits**: Resend free tier allows 100 emails/day and 3,000 emails/month
- **Email from address**: By default, emails come from `onboarding@resend.dev`
- **To customize the sender**: You need to verify your own domain in Resend (optional)
- **Reply-to**: The emails will have the sender's email as reply-to, so you can reply directly

## Troubleshooting

If emails aren't working:

1. Check Vercel deployment logs for errors
2. Verify both environment variables are set correctly
3. Make sure your Resend API key is valid
4. Check your spam folder
5. View the API function logs in Vercel dashboard under **Functions**

## Alternative: Using Your Own Email Service

If you prefer a different service, you can modify `/api/send-email.ts` to use:
- **SendGrid**: Popular alternative with generous free tier
- **Nodemailer**: Use with Gmail SMTP (requires app password)
- **Formspree**: No-code alternative (easier but less control)

The current setup uses Resend because it's:
- Free for personal projects
- Easy to set up
- Reliable and fast
- No credit card required
