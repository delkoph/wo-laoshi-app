# 我的老师 · Wǒ Lǎoshī (My Teacher)

**Wǒ Lǎoshī** is a comprehensive, interactive, and gamified Chinese learning web application. It is designed to help learners master Mandarin Chinese from HSK 1 to HSK 6, offering a suite of tools including flashcards, sentence building, mock quizzes, a full dictionary, and an AI-powered translator.

The app is built entirely with vanilla HTML, CSS, and JavaScript, making it incredibly lightweight, fast, and easy to deploy without any backend infrastructure.

## ✨ Features

*   **📚 HSK 1-6 Vocabulary:** Dynamically loads a massive dataset of over 5,000+ words from the official HSK 3.0 standard.
*   **🃏 Flashcards:** Study vocabulary using an interactive 3D flip-card system. Choose between "Mixed" (random) or "A-Z" (alphabetical) study modes.
*   **🧩 Sentence Builder:** Arrange words to form correct sentences. Includes a **Pinyin toggle** and a **Hint** button for grammar rules.
*   **📝 Mock Quizzes:** Test your knowledge with dynamically generated multiple-choice quizzes for your current HSK level.
*   **📖 Comprehensive Dictionary:** Search by English, Chinese characters, or Pinyin (with or without tone marks). Includes a voice search feature via microphone.
*   **🌐 Live Translator:** Translate text between English and Chinese. Features voice input, text-to-speech output, and automatically generates Pinyin (with tone marks) above Chinese translations.
*   **🎮 Gamification:** Earn XP for studying and taking quizzes. Rank up from Bronze to Diamond on the Progress Ladder.
*   **🏆 Global Leaderboard:** Compete with simulated users based on total XP (with avatars and usernames).
*   **🎨 Dynamic Themes:** Choose from 4 distinct color themes (Warm, Green, Dark, Blue) that sync automatically across the main app, dictionary, and translator.
*   **🔔 Smart Notifications:** Set study reminders to keep your streak alive.
*   **📱 PWA-Ready Design:** Fully responsive, mobile-first design that feels like a native app.

## 🛠️ Technology Stack

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Data Source:** [The Open Dictionary - Complete HSK Vocabulary](https://github.com/TheOpenDictionary/complete-hsk-vocabulary) (Served locally via `complete.min.json` for maximum speed and reliability).
*   **Libraries:** [Pinyin Pro](https://www.npmjs.com/package/pinyin-pro) (CDN) for accurate tone-mark generation in the Translator.
*   **Hosting:** Vercel
*   **Storage:** Browser `localStorage` (for user progress, XP, themes, and avatars).

## 🚀 How to Deploy This Project

This project is ready to be hosted on Vercel. Follow these steps to get it live:

1. **Fork or Clone this Repository:**
   Create a copy of this repository in your own GitHub account.
2. **Download the Data File:**
   Ensure that the `complete.min.json` file is in the root directory. (This file is required for the HSK vocabulary to load).
3. **Deploy to Vercel:**
   * Go to [Vercel](https://vercel.com/) and log in.
   * Click **"Add New..."** -> **"Project"**.
   * Import this GitHub repository.
   * Leave all settings as default (Framework Preset: `Other`).
   * Click **"Deploy"**.

Vercel will automatically build the site and provide you with a live URL. Any changes you push to GitHub will automatically update your live site!

## 💻 Local Development

To run this project locally on your computer, you cannot just double-click `index.html` because of browser security restrictions regarding `localStorage` and API fetching. You need a local server.

1. Clone this repository to your local machine.
2. Open the folder in your code editor (e.g., VS Code).
3. Install the **"Live Server"** extension in VS Code.
4. Right-click on `index.html` and select **"Open with Live Server"**.
5. The app will open in your browser at `http://127.0.0.1:5500`.

## 📂 Project Structure

*   `index.html` - The main dashboard and learning app.
*   `dictionary.html` - The standalone dictionary feature (loaded via iframe).
*   `translator.html` - The standalone translator feature (loaded via iframe).
*   `complete.min.json` - The offline database containing all HSK 1-6 vocabulary.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](../../issues) if you want to contribute.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
