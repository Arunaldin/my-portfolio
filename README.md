# Arunaldin Sugin — Software Engineer Portfolio Website

A modern, high-performance personal developer portfolio built for **Arunaldin Sugin**, B.Tech Computer Science & Engineering undergraduate at **Karunya Institute of Technology and Data Science** (Class of 2027).

Designed specifically for campus placements, software engineering internships, and tech recruiting.

---

## 🌟 Key Highlights & Design Philosophy

- **Modern Dark Aesthetic**: Deep navy and pure obsidian tones (`#05070e`, `#090e1a`) with electric cyan and purple gradient accents.
- **Glassmorphism**: Translucent glass cards featuring backdrop blur, subtle luminous borders, and reactive hover lighting.
- **Interactive Terminal UI**: Code showcase window highlighting technical proficiencies, live internship availability, and verifiable status tags.
- **Dynamic Typewriter**: Hero section typing animation emphasizing digital solutions and engineering passion.
- **Micro-Interactions**: Smooth scrolling, active navigation scrollspy, scroll reveal animations, back-to-top floating button, and one-click email copy to clipboard.
- **Featured Real Project**: Full spotlight on [CareerVerse AI](https://careerverse-ai-0wq4.onrender.com/) with direct live deployment and [GitHub source code](https://github.com/Arunaldin/CareerVerse-AI) links.
- **Zero Heavy Dependencies**: Pure semantic **HTML5**, modern **CSS3**, and clean **Vanilla JavaScript** for sub-second loading performance and perfect SEO readiness.

---

## 📁 Project Architecture

```text
portfolio/
├── index.html                           # Semantic HTML5 layout & Open Graph meta tags
├── style.css                            # CSS design system, dark palette, animations & responsive queries
├── script.js                            # Interactive logic (typewriter, scrollspy, contact validation, toast)
├── assets/
│   └── Arunaldin_Sugin_Resume.pdf       # Resume download target (ready to be replaced with your PDF)
└── README.md                            # Documentation and deployment instructions
```

---

## 🚀 How to Run Locally

You can run this portfolio on your computer using any of these simple methods:

### Option 1: Direct File Open (Instant)
- Simply double-click `index.html` in your file explorer, or right-click `index.html` and select **Open with > Chrome / Edge / Firefox**.

### Option 2: VS Code Live Server (Recommended)
1. Open the `portfolio` folder in **Visual Studio Code**.
2. Install the extension **Live Server** (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The website will launch automatically at `http://127.0.0.1:5500/`.

### Option 3: Node.js / NPX Server
If you have Node.js installed, open terminal in the project folder and run:
```bash
npx serve .
```
or
```bash
npx http-server -p 3000
```
Then visit `http://localhost:3000`.

---

## 🌐 How to Deploy to GitHub Pages (Free Hosting)

Publish your live portfolio on the web in 3 simple steps:

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/Arunaldin/portfolio.git
   git push -u origin main
   ```
   *(Or name the repository `Arunaldin.github.io` to deploy it directly at your root domain `https://arunaldin.github.io/`)*

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/Arunaldin/portfolio`
   - Click on **Settings** (top tab).
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.

3. **Visit Your Live Website**:
   - In 1 to 2 minutes, GitHub will publish your website at:
     ```text
     https://arunaldin.github.io/portfolio/
     ```

---

## 📄 Updating Your Resume

1. Save your finalized resume in PDF format as `Arunaldin_Sugin_Resume.pdf`.
2. Replace the file inside the `assets/` folder:
   ```text
   assets/Arunaldin_Sugin_Resume.pdf
   ```
3. The "Resume" buttons in the navigation bar and hero section will immediately download your new PDF!

---

## 📬 Contact & Profiles

- **Developer**: Arunaldin Sugin
- **Email**: [ssugin317@gmail.com](mailto:ssugin317@gmail.com)
- **LinkedIn**: [linkedin.com/in/arunaldin-sugin-j-0333b7326](https://linkedin.com/in/arunaldin-sugin-j-0333b7326)
- **GitHub**: [github.com/Arunaldin](https://github.com/Arunaldin)
- **Featured Live Project**: [CareerVerse AI](https://careerverse-ai-0wq4.onrender.com/)

