# Project Name

![Bun](https://img.shields.io/badge/Bun-v1.1+-blue) ![Vite](https://img.shields.io/badge/Vite-^6.0-purple) ![Kaplay](https://img.shields.io/badge/Kaplay-^3001-teal)

## 🚀 Overview

This is a beginner platformer game project using **Bun** and **Vite**. With Bun's high performance runtime and Vite's fast build tooling, this setup ensures blazing-fast development and seamless deployment for your modern web applications.

## 📂 Project Structure

```
js-game-dev/
├── src/
│   ├── common.js      # Common functions
│   ├── game.js        # Game logic
│   ├── gameOver.js    # Game over screen
│   └── main.js        # Entry point
├── public/            # Static public files
├── bun.lockb          # Bun lockfile
├── index.html         # Main HTML file
├── package.json       # Project metadata
```

## 🛠️ Installation

1. **Install Bun** (if not already installed):

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/js-game-dev.git
   cd js-game-dev
   ```

3. **Install dependencies**:
   ```bash
   bun install
   ```

## 💻 Development

Start the development server:

```bash
bun dev
```

This will launch the Vite development server and open the project in your default browser.

## 📦 Build

To build the project for production:

```bash
bun run build
```

The production-ready files will be generated in the `dist/` directory.

## 🔍 Preview

Preview the production build:

```bash
bun run preview
```

## 🧪 Testing

To run tests:

```bash
bun run test
```

Made with ❤️ using Bun and Vite + Kaplay.js.
