# Power Ace Solutions (Pvt) Ltd

Official modern web application for **Power Ace Solutions (Private) Limited** — engineering solar energy, uninterruptible power supplies (UPS), commercial three-phase electrical balance, and integrated security infrastructure across Islamabad and Rawalpindi.

## 🚀 Tech Stack

- **Framework**: React 19 (TypeScript)
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 with custom architectural theme (Navy Blue `#0F1E36` & Solar Orange `#FF6600`)
- **Typography**: Manrope for display headings & Plus Jakarta Sans for body
- **Icons**: Lucide React
- **Hosting / Deployment**: Vercel ready (`vercel.json` included)

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready output will be placed in the `dist/` directory.

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## ⚡ Deploying to Vercel

This repository is pre-configured for Vercel with single-page application routing, static assets cache headers, and clean URLs defined in `vercel.json`.

### Option A: Import from GitHub (Recommended)
1. Push this repository to your GitHub account (see instructions below).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New...** → **Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite** as the framework:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your site will be live on your `.vercel.app` domain in seconds!

### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📦 Pushing to GitHub

To push this codebase to a new GitHub repository:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "feat: Power Ace Solutions web application with Vercel configuration"

# 4. Set main branch
git branch -M main

# 5. Add your GitHub repository remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🔐 Administrative Console

The application includes an internal project management console for listing, adding, and managing installations:

- **Location**: Click the discreet **lock icon** in the bottom bar of the website footer.
- **Features**:
  - Live project directory across 5 categories (Solar, Residential, Commercial, Electrical & UPS, Security & CCTV).
  - Manual photo upload directly from your computer (auto-resized & optimized client-side).
  - Instant synchronization with local storage.
  - Reset to default verified installations.
